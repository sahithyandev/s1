import { writeFile } from "node:fs/promises";
import { relative } from "node:path";
const matter = require("gray-matter");

const PATTERN_TITLE_PREFIX = /\/(\d+)-/;

function safeParseInt(value, defaultValue = undefined) {
	if (typeof value === "undefined") return defaultValue;

	const parsed = Number.parseInt(value);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
}

const TIME_DELTA = 24 * 3600 * 1000;
const TIME_NOW = new Date().valueOf();

/**
    @param {Array<string>} mdFilePaths
*/
export async function autoSlug(mdFilePaths) {
	for (let i = 0; i < mdFilePaths.length; i++) {
		const filePath = mdFilePaths[i];
		if (!filePath.endsWith(".md")) {
			continue;
		}
		const file = matter.read(filePath);
		const { data: currentFrontMatter } = file;

		if (!currentFrontMatter.title) {
			return;
		}
		const relativeFromDocsDirectory = relative("./src/content/docs", filePath);
		const parts = relativeFromDocsDirectory.split("/");
		const filename = parts.pop();
		const section = parts.join("/");

		file.data = {
			...currentFrontMatter,
		};

		const slugSection = relativeFromDocsDirectory.replace(".md", "");
		const newSlug = slugSection.replace(PATTERN_TITLE_PREFIX, "/");
		file.data.slug = newSlug;

		// const s = await lstat(filePath);
		// const timeDelta = TIME_NOW - s.mtimeMs;
		// let isInsideTimeDelta = false;
		// if (timeDelta < TIME_DELTA) {
		// 	isInsideTimeDelta = true;
		// }
		// if (isInsideTimeDelta) {
		// 	file.data.sidebar.badge = "new";
		// } else {
		// 	file.data.sidebar.badge = undefined;
		// }
		if (!file.data.sidebar) {
			file.data.sidebar = {};
		}
		const orderMatched = slugSection.match(PATTERN_TITLE_PREFIX);
		if (orderMatched) {
			const orderNumber = safeParseInt(orderMatched[1]);
			if (orderNumber !== undefined) {
				file.data.sidebar.order = orderNumber;
			}
		} else {
			console.log(filePath, "isn't named correctly.");
		}
		if (file.data.sidebar.order === 1) {
			file.data.prev = false;
		} else {
			file.data.prev = true;
		}
		if (i === mdFilePaths.length - 1 || !mdFilePaths[i + 1].includes(section)) {
			file.data.next = false;
		} else {
			file.data.next = true;
		}
		const updatedFileContent = matter.stringify(file, {});
		writeFile(filePath, updatedFileContent);
	}
}

// updates the frontmatter of mdx files
if (require.main === module) {
	autoSlug(process.argv.slice(2));
}
