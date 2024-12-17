import { type ChildProcessWithoutNullStreams, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import chromium from "@sparticuz/chromium";
import type { AstroIntegration } from "astro";
import { PDFDocument, type PDFImage, PDFName } from "pdf-lib";
import type { Browser, Page } from "puppeteer-core";
import puppeteer from "puppeteer-core";
import { STARLIGHT_CONFIG } from "../config.mjs";
import { hyphenCaseToTitleCase } from "../utils";
import {
	extractSectionIndicesFromSidebar,
	safeSplit,
	waitForServer,
} from "./helpers/common";
import { getMetadata, setMetadata } from "./helpers/meta";
import {
	type OutlineNode,
	formatOutlines,
	getOutline,
	setOutline,
} from "./helpers/outline";
import {
	createIntroDoc,
	createPageLinkAnnotation,
	createPrefaceDoc,
	mergeIntoOne,
} from "./helpers/pdf";

chromium.args.splice(chromium.args.indexOf("--single-process"), 1);
chromium.setHeadlessMode = true;
const CONTENT_DIRECTORY = "./src/content/docs";

function outputFilename(dirPath: string, index: number) {
	return join(
		CONTENT_DIRECTORY,
		"summary",
		dirPath
			.replace("/", `--${index.toString().padStart(2, "0")}--`)
			.concat(".md"),
	);
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

				const sections = extractSectionIndicesFromSidebar(
					STARLIGHT_CONFIG.sidebar,
				);

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
					const sectionPath = dirname(fileString);
					const outputPath = outputFilename(
						sectionPath,
						sections[sectionPath] || 0,
					);
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
					Object.entries(outputFileContents).map(
						async ([outputFilePath, content]) =>
							writeFile(outputFilePath, content).then(() => {
								logger.info(`saved: ${outputFilePath}`);
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

				await createPrefaceDoc(logger, outputDir);
				await Promise.all(
					pagesToExport.map(async (pageUrl) => {
						const linkParts = pageUrl.split("/").slice(0, -1);
						const lastPart = linkParts.at(-1);
						if (!lastPart) return;
						const fileName = lastPart.concat("--1content.pdf");

						const parts = fileName.split("--");

						const module = parts[0];
						const index = Number.parseInt(parts[1]);
						const section = parts[2];

						await createIntroDoc(logger, module, index, section, outputDir);

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
							outlines: formatOutlines(
								await getOutline(summaryPage, ["h1", "h2", "h3", "h4", "h5"]),
								` - ${hyphenCaseToTitleCase(module)}`,
							),
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

						setMetadata(pdfDoc, pageInfo.meta);
						setOutline(pdfDoc, pageInfo.outlines, false);
						const updatedPdfDocBuffer = await pdfDoc.save();
						return writeFile(pageInfo.path, updatedPdfDocBuffer, {});
					}),
				);

				await mergeIntoOne(logger, outputDir);
			},
		},
	};
}
