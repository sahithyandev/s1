import { exec } from "node:child_process";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import fontkit from "@pdf-lib/fontkit";
import type { AstroIntegrationLogger } from "astro";
import {
	type PDFDict,
	PDFDocument,
	PDFName,
	PDFString,
	PageSizes,
} from "pdf-lib";
import { BOOK_CONFIG, MODULE_CODES } from "../../config.mjs";
import { hyphenCaseToTitleCase } from "../../utils";

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

const execPromise = promisify(exec);

export async function mergeIntoOne(
	logger: AstroIntegrationLogger,
	dir: string,
) {
	try {
		const files = await readdir(dir);
		const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
		const filePaths = pdfFiles.map((file) => join(dir, file)).join(" ");
		const outputFilePath = join(dir, "../S1.pdf");

		await execPromise(`pdftk ${filePaths} cat output ${outputFilePath}`);
		logger.info(`created: ${outputFilePath}`);

		// set meta
		const pdfBytes = Uint8Array.from(await readFile(outputFilePath));
		const pdfDoc = await PDFDocument.load(pdfBytes);

		// meta overrides
		pdfDoc.setAuthor("Sahithyan's S1 (https://s1.sahithyan.dev)");
		pdfDoc.setProducer("Sahithyan Kandathasan (https://sahithyan.dev)");
		pdfDoc.setCreator("Sahithyan Kandathasan (https://sahithyan.dev)");

		// outlines fix
		const outlines = pdfDoc.catalog.lookup(PDFName.of("Outlines"));

		if (outlines) {
			// biome-ignore lint/suspicious/noExplicitAny: don't know of the type exactly
			let currentOutline = (outlines as any).lookup(PDFName.of("First"));
			while (currentOutline) {
				const firstChild = currentOutline.lookup(
					PDFName.of("First"),
				) as PDFDict;
				if (firstChild) {
					logger.info(
						`fix outline: ${currentOutline.lookup(PDFName.of("Title")).asString()}`,
					);
					currentOutline.set(
						PDFName.of("Dest"),
						firstChild.lookup(PDFName.of("Dest")),
					);
				}
				currentOutline = currentOutline.lookup(PDFName.of("Next"));
			}
		} else {
			logger.warn("No outlines found in the PDF");
		}

		await writeFile("./dist/S1.pdf", await pdfDoc.save()).then(() =>
			logger.info("saved: ./dist/S1.pdf"),
		);
	} catch (error) {
		logger.error("Error merging PDFs");
		console.error(error);
		process.exit(1);
	}
}

export const DMSansFont = Uint8Array.from(
	await readFile("./public/fonts/DMSans_36pt-Regular.ttf"),
);

export async function createIntroDoc(
	logger: AstroIntegrationLogger,
	module: string,
	index: number,
	section: string,
	outputDir: string,
) {
	const introDoc = await PDFDocument.create();
	introDoc.registerFontkit(fontkit);
	const DMSansEmbeddedFont = await introDoc.embedFont(DMSansFont);

	const page = introDoc.addPage(PageSizes.A4);
	const pageSize = page.getSize();

	page.setFont(DMSansEmbeddedFont);
	page.moveTo(pageSize.width / 2 - 240, pageSize.height / 2 + 250);
	const moduleDisplayText = hyphenCaseToTitleCase(module);
	page.drawText(moduleDisplayText.replace(" ", "\n"), {
		size: 58,
		lineHeight: 52,
		font: DMSansEmbeddedFont,
	});
	page.moveDown(100);
	page.drawText(MODULE_CODES[moduleDisplayText] || "", {
		size: 24,
		font: DMSansEmbeddedFont,
	});
	page.moveDown(100);
	const sectionDisplayText = hyphenCaseToTitleCase(section);
	page.drawText(sectionDisplayText, {
		size: 36,
		font: DMSansEmbeddedFont,
	});

	const introDocSavePath = join(
		outputDir,
		`${module}--${index.toString().padStart(2, "0")}--${section}--0intro.pdf`,
	);
	return writeFile(introDocSavePath, await introDoc.save(), {}).then(() =>
		logger.info(`saved intro: ${introDocSavePath}`),
	);
}

export async function createPrefaceDoc(
	logger: AstroIntegrationLogger,
	outputDir: string,
) {
	const pdfDoc = await PDFDocument.create();
	pdfDoc.setCreator("Sahithyan Kandathasan (https://sahithyan.dev)");
	pdfDoc.setAuthor("Sahithyan Kandathasan (https://sahithyan.dev)");
	pdfDoc.setProducer("Sahithyan's S1 (https://s1.sahithyan.dev)");

	const watermarkImageBytes = await readFile("./src/logo-high-res.png");
	const watermarkImage = await pdfDoc.embedPng(
		Uint8Array.from(watermarkImageBytes),
	);

	pdfDoc.registerFontkit(fontkit);
	const DMSansEmbeddedFont = await pdfDoc.embedFont(DMSansFont);

	// first page
	const firstPage = pdfDoc.addPage();
	const pageSize = firstPage.getSize();
	firstPage.moveTo(pageSize.width / 2 - 240, pageSize.height - 200);
	firstPage.drawText("Sahithyan's", {
		size: 50,
		font: DMSansEmbeddedFont,
	});
	firstPage.moveDown(190);
	firstPage.moveRight(10);
	firstPage.drawImage(watermarkImage, {
		width: 200,
		height: 200,
	});
	firstPage.moveRight(10);
	firstPage.moveDown(140);
	firstPage.drawText("Included modules:", {
		size: 18,
	});
	firstPage.moveDown(40);
	for (const key of Object.keys(MODULE_CODES)) {
		firstPage.drawText(key, {
			size: 16,
		});
		firstPage.moveRight(240);
		firstPage.drawText(MODULE_CODES[key], {
			size: 16,
		});
		firstPage.moveLeft(240);
		firstPage.moveDown(30);
	}

	// second page
	const secondPage = pdfDoc.addPage();
	secondPage.moveTo(pageSize.width / 2 - 240, pageSize.height - 200);

	secondPage.drawText(BOOK_CONFIG.description, {
		size: 18,
		maxWidth: pageSize.width - 100,
	});
	secondPage.moveDown(40);

	const saveLocation = join(outputDir, "0preface.pdf");
	const pdfBytesToSave = await pdfDoc.save();
	return writeFile(saveLocation, pdfBytesToSave).then(() => {
		logger.info("Preface created");
	});
}
