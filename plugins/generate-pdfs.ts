import { type ChildProcessWithoutNullStreams, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import chromium from "@sparticuz/chromium";
import type { AstroIntegration } from "astro";
import {
	ColorTypes,
	PDFDict,
	PDFDocument,
	type PDFImage,
	PDFName,
	PDFString,
	sum,
} from "pdf-lib";
import type { Browser, Page } from "puppeteer-core";
import puppeteer from "puppeteer-core";
import { getMetadata, setMetadata } from "./helpers/meta";
import { type OutlineNode, getOutline, setOutline } from "./helpers/outline";

chromium.args.splice(chromium.args.indexOf("--single-process"), 1);
chromium.setHeadlessMode = true;
const CONTENT_DIRECTORY = "./src/content/docs";

function outputFilename(filePath: string) {
	return join(
		CONTENT_DIRECTORY,
		"summary",
		dirname(filePath).replaceAll("/", "--").concat(".md"),
	);
}
export function createPageLinkAnnotation(
	pdfDocument: PDFDocument,
	url: string,
	placement: {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
	},
) {
	return pdfDocument.context.register(
		pdfDocument.context.obj({
			Type: "Annot",
			Subtype: "Link",
			Rect: [placement.x1, placement.y1, placement.x2, placement.y2],
			Border: [0, 0, 0],
			A: {
				Type: "Action",
				S: "URI",
				URI: PDFString.of(url),
			},
		}),
	);
}

async function waitForServer(url: string, timeout = 10000, interval = 500) {
	const start = Date.now();

	while (Date.now() - start < timeout) {
		try {
			const response = await fetch(url);

			if (response.ok) {
				console.log(`Server is ready at ${url}`);
				return true;
			}
		} catch {}
		await new Promise((resolve) => setTimeout(resolve, interval));
	}

	throw new Error(`Server did not become ready within ${timeout}ms`);
}

function safeSplit(str: string, splitter: string, maximumSplits?: number) {
	const parts: Array<string> = [];
	let currentCursor = 0;
	while (currentCursor <= str.length) {
		const nextOccuranceIndex = str.indexOf(splitter, currentCursor);
		if (
			(typeof maximumSplits === "number" &&
				parts.length === maximumSplits - 1) ||
			nextOccuranceIndex === -1
		) {
			parts.push(str.substring(currentCursor));
			return parts;
		}
		parts.push(str.substring(currentCursor, nextOccuranceIndex));
		currentCursor = nextOccuranceIndex + splitter.length;
	}
	return parts;
}

const WATERMARK_EXPECTED_WIDTH = 200; // px

interface Config {
	/**
    Path to the watermark image. Relative to the project root.
  */
	watermarkImage?: string;
	credits?: {
		text: string;
		href: string;
		size: number;
	};
}

export default function generatePdfsIntegration(
	config: Config,
): AstroIntegration {
	let browser: Browser;
	let previewServer: ChildProcessWithoutNullStreams;
	/**
    used to signal if the integration must do its work or not
  */
	let isEnabled = true;

	return {
		name: "generate-pdfs",
		hooks: {
			"astro:config:setup": async ({ logger, command }) => {
				if (command !== "build") {
					isEnabled = false;
					logger.info("disabled as non-production build");
					return;
				}

				const outputFileContents: Record<string, string> = {};

				await mkdir(join(CONTENT_DIRECTORY, "summary"), {
					recursive: true,
				});

				const inputFiles = await readdir(CONTENT_DIRECTORY, {
					recursive: true,
				});
				inputFiles.sort();

				for (const fileString of inputFiles) {
					if (
						!fileString.includes("/") ||
						!fileString.endsWith(".md") ||
						fileString.includes("summary/")
					) {
						continue;
					}
					const inputFile = join(CONTENT_DIRECTORY, fileString);
					const content = await readFile(inputFile, {
						encoding: "utf-8",
					});
					if (content.includes("\ndraft: true\n")) {
						continue;
					}
					const outputPath = outputFilename(fileString);
					if (outputFileContents[outputPath] === undefined) {
						const parts = safeSplit(content, "---", 3);
						const sidebarLabel = parts[1]
							.split("\n")[1]
							.replaceAll("title: ", "");
						const frontmatter = parts[1]
							.split("\n")[1]
							.concat(`\nsidebar:\n  label: ${sidebarLabel}\n`);
						outputFileContents[outputPath] = "---".concat(
							"\n",
							frontmatter,
							"---\n\n",
							"## Introduction\n",
							parts[parts.length - 1]
								.replaceAll(/^#### /gm, "##### ")
								.replaceAll(/^### /gm, "#### ")
								.replaceAll(/^## /gm, "### "),
						);
					} else {
						const title = content
							.split("---")[1]
							.split("\n")[1]
							.split("\n")[0]
							.replace("title: ", "");
						outputFileContents[outputPath] = outputFileContents[
							outputPath
						].concat(
							`## ${title}`,
							content
								.split("---")
								.slice(2)
								.join("---")
								.replaceAll(/^#### /gm, "##### ")
								.replaceAll(/^### /gm, "#### ")
								.replaceAll(/^## /gm, "### "),
						);
					}
				}

				Promise.all(
					Object.entries(outputFileContents).map(async ([filePath, content]) =>
						writeFile(filePath, content).then(() => {
							logger.info(`saved: ${filePath}`);
						}),
					),
				);
			},
			"astro:build:done": async ({ dir, pages, logger }) => {
				if (!isEnabled) return;
				previewServer = spawn("astro", ["preview"]);
				const pagesToExport: string[] = [];
				for (const page of pages) {
					if (!page.pathname.startsWith("summary")) {
						continue;
					}
					pagesToExport.push(page.pathname);
				}

				const buildDir = join(fileURLToPath(dir.toString()));
				const outputDir = join(buildDir, "as-pdf");
				if (!existsSync(outputDir)) {
					await mkdir(outputDir, { recursive: true });
				}

				await waitForServer("http://localhost:4321/");
				logger.info("dev server started");
				browser = await puppeteer.launch(
					// FOR production
					{
						devtools: false,
						args: chromium.args,
						defaultViewport: chromium.defaultViewport,
						executablePath: await chromium.executablePath(),
						headless: chromium.headless,
					},
					// FOR local testing
					// {
					// devtools: false,
					// executablePath: "/usr/bin/google-chrome",
					// headless: false,
					// }
				);

				let usedAboutBlankPage = false;
				const browserTabs = await browser.pages();
				const pagesAdditionalInformations: Array<{
					path: string;
					meta: Record<string, string>;
					outlines: OutlineNode[];
				}> = [];

				await Promise.all(
					pagesToExport.map(async (pageUrl) => {
						const linkParts = pageUrl.split("/").slice(0, -1);
						const lastPart = linkParts.at(-1);
						if (!lastPart) return;
						const fileName = lastPart.concat(".pdf");
						const pathToSavePdf = join(outputDir, fileName);

						let summaryPage: Page;
						if (usedAboutBlankPage || browserTabs.length === 0) {
							summaryPage = await browser.newPage();
						} else {
							summaryPage = browserTabs[0];
							usedAboutBlankPage = true;
						}

						const pageFullUrl = "http://localhost:4321/".concat(pageUrl);
						logger.info(`opening ${pageFullUrl}`);
						await summaryPage.goto(pageFullUrl, {
							waitUntil: "networkidle2",
							timeout: 120000,
						});
						await summaryPage.evaluate(() => {
							// remove code-copy buttons
							const items = document.querySelectorAll(".expressive-code .copy");
							for (let i = 0; i < items.length; i++) {
								items.item(i).remove();
							}
						});
						await summaryPage.pdf({
							path: pathToSavePdf,
							format: "A4",
							scale: 0.9,
							margin: {
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
							},
						});
						logger.info(`saved: ${pageUrl} (to ${pathToSavePdf})`);

						pagesAdditionalInformations.push({
							path: pathToSavePdf,
							meta: await getMetadata(summaryPage),
							outlines: (
								await getOutline(summaryPage, ["h2", "h3", "h4", "h5", "h6"])
							).slice(1), // to remove "On this section label"
						});

						await summaryPage.close();
					}),
				);
				await browser.close();
				previewServer.kill();

				const summaryFolder = join(buildDir, "summary");
				rm(summaryFolder, {
					recursive: true,
				}).then(() => {
					logger.info(`deleted: ${summaryFolder}`);
				});

				let watermarkImageBytes: Buffer | undefined = undefined;
				if (config.watermarkImage) {
					watermarkImageBytes = await readFile(config.watermarkImage, {});
				}
				const watermarkSize = { width: WATERMARK_EXPECTED_WIDTH, height: 0 };

				const bottomTextSize =
					config.credits === undefined
						? undefined
						: { width: 90, height: config.credits.size };

				await Promise.all(
					pagesAdditionalInformations.map(async (pageInfo) => {
						const pdfBuffer = await readFile(pageInfo.path, {});
						const pdfDoc = await PDFDocument.load(Uint8Array.from(pdfBuffer));
						let watermarkImage: PDFImage | undefined = undefined;
						let textPlacement:
							| { x1: number; y1: number; x2: number; y2: number }
							| undefined = undefined;

						if (watermarkImageBytes) {
							watermarkImage = await pdfDoc.embedPng(
								Uint8Array.from(watermarkImageBytes),
							);
							if (watermarkSize.height === 0) {
								watermarkSize.height =
									(watermarkImage.height * WATERMARK_EXPECTED_WIDTH) /
									watermarkImage.width;
							}
						}
						if (config.credits) {
							textPlacement = {
								x1: 0,
								y1: 12,
								x2: 0,
								y2: 0,
							};
						}
						if (watermarkImage || config.credits) {
							for (const page of pdfDoc.getPages()) {
								if (watermarkImage) {
									page.drawImage(watermarkImage, {
										x: (page.getWidth() - watermarkSize.width) / 2,
										y: (page.getHeight() - watermarkSize.height) / 2,
										width: watermarkSize.width,
										height: watermarkSize.height,
										opacity: 0.1,
									});
								}
								if (textPlacement && config.credits && bottomTextSize) {
									if (textPlacement.x1 === 0) {
										textPlacement.x1 =
											page.getWidth() - bottomTextSize.width - 15;
										textPlacement.x2 = textPlacement.x1 + bottomTextSize.width;
										textPlacement.y2 = textPlacement.y1 + bottomTextSize.height;
									}

									page.drawText(config.credits.text, {
										x: textPlacement.x1,
										y: textPlacement.y1,
										opacity: 0.8,
										size: config.credits.size,
									});
									// page.drawRectangle({
									// 	x: textPlacement.x1,
									// 	y: textPlacement.y1,
									// 	width: bottomTextSize.width,
									// 	height: bottomTextSize.height,
									// 	opacity: 1,
									// 	borderColor: {
									// 		type: ColorTypes.RGB,
									// 		blue: 255,
									// 		green: 0,
									// 		red: 0,
									// 	},
									// });

									const linkRef = createPageLinkAnnotation(
										pdfDoc,
										config.credits.href,
										textPlacement,
									);
									page.node.set(
										PDFName.of("Annots"),
										pdfDoc.context.obj([linkRef]),
									);
								}
							}
						}

						//meta overrides
						pageInfo.meta.creator =
							"Sahithyan Kandathasan (https://sahithyan.dev)";
						pageInfo.meta.author = pageInfo.meta.creator;
						pageInfo.meta.producer =
							"Sahithyan's S1 (https://s1.sahithyan.dev)";

						setMetadata(pdfDoc, pageInfo.meta);
						setOutline(pdfDoc, pageInfo.outlines, false);
						const updatedPdfDocBuffer = await pdfDoc.save();
						return writeFile(pageInfo.path, updatedPdfDocBuffer, {});
					}),
				);
			},
		},
	};
}
