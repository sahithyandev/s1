import type { PDFDocument } from "pdf-lib";
import type { Page } from "puppeteer-core";

interface Meta {
	title?: string;
	subject?: string;
	author?: string;
	keywords?: string[] | string;
	creator?: string;
	producer?: string;
	creationDate?: Date | string;
	modDate?: Date | string;
	metadataDate?: Date | string;
}

export function getMetadata(page: Page) {
	return page.evaluate(() => {
		const meta: Record<string, string> = {};
		const title = document.querySelector("title");
		if (title?.textContent)
			meta.title = title.textContent.trim().replace("Summary | ", "");

		const lang = document.querySelector("html")?.getAttribute("lang");
		if (lang) meta.lang = lang;

		const metaTags = document.querySelectorAll("meta");
		for (let tagIndex = 0; tagIndex < metaTags.length; tagIndex++) {
			const tag = metaTags.item(tagIndex);
			if (tag.name) meta[tag.name] = tag.content;
		}
		return meta;
	});
}

export function setMetadata(pdfDoc: PDFDocument, meta: Meta) {
	if (meta.keywords && typeof meta.keywords === "string")
		meta.keywords = meta.keywords.split(",");

	if (!meta.keywords) meta.keywords = [];

	// Overwrite Dates
	if (!(meta.creationDate instanceof Date)) meta.creationDate = new Date();

	meta.modDate = new Date();
	meta.metadataDate = new Date();

	// Get the existing Info
	if (!meta.creator) {
		const creator = pdfDoc.getCreator();
		meta.creator = creator;
	}

	if (!meta.producer) {
		const producer = pdfDoc.getProducer();
		meta.producer = producer;
	}

	if (meta.title) pdfDoc.setTitle(meta.title);

	if (meta.subject) pdfDoc.setSubject(meta.subject);

	if (Array.isArray(meta.keywords)) pdfDoc.setKeywords(meta.keywords);

	if (meta.author) pdfDoc.setAuthor(meta.author);

	if (meta.creationDate) pdfDoc.setCreationDate(meta.creationDate);

	if (meta.modDate) pdfDoc.setModificationDate(meta.modDate);

	if (meta.creator) pdfDoc.setCreator(meta.creator);

	if (meta.producer) pdfDoc.setProducer(meta.producer);
}
