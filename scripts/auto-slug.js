import { readdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
const matter = require("gray-matter");

const PATTERN_TITLE_PREFIX = /\/(\d+)-/;

/**
 * @param {string | undefined} value
 * @param {number | undefined} defaultValue
 */
function safeParseInt(value, defaultValue = undefined) {
	if (typeof value === "undefined") return defaultValue;

	const parsed = Number.parseInt(value);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
}

/**
    @param {Array<string>} mdFilePaths
*/
export async function autoSlug(mdFilePaths) {
	for (let i = 0; i < mdFilePaths.length; i++) {
		const filePath = mdFilePaths[i];
		if (!filePath.endsWith(".md") || filePath.includes("/summary/")) {
			continue;
		}
		const file = matter.read(filePath);
		const { data: currentFrontMatter } = file;

		if (!currentFrontMatter.title) {
			return;
		}
		const relativeFromDocsDirectory = relative("./src/content/docs", filePath);
		const parts = relativeFromDocsDirectory.split("/");
		parts.pop();
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
		console.log(`${i} ${section} ${file.data.slug}`);
		if (file.data.sidebar.order === 1) {
			file.data.prev = false;
			console.log(">>> prev false");
		} else {
			file.data.prev = true;
			console.log(">>> prev true");
		}
		if (i === mdFilePaths.length - 1 || !mdFilePaths[i + 1].includes(section)) {
			file.data.next = false;
			console.log(">>> next false");
		} else {
			file.data.next = true;
			console.log(">>> next true");
		}
		const updatedFileContent = matter.stringify(file, {});
		writeFile(filePath, updatedFileContent);
	}
}

// updates the frontmatter of mdx files
if (require.main === module) {
	/** @type {Array<string>} */
	const directories = [];
	/** @type {Array<string>} */
	const filePaths = [];

	for (const changedFile of process.argv.slice(2)) {
		const changedDirectory = dirname(changedFile);
		if (directories.includes(changedDirectory)) {
			continue;
		}
		directories.push(changedDirectory);
		const files = readdirSync(changedDirectory);
		for (const file of files) {
			filePaths.push(join(changedDirectory, file));
		}
	}
	filePaths.sort();
	autoSlug(filePaths);
}
