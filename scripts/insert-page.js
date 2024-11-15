import { readdir, rename, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { hyphenCaseToTitleCase } from "../utils/index";

/**
@param {Array<string>} args
*/
async function insertPage(args) {
	console.log("======================");
	console.log("EXPECTED ARGUMENTS:");
	console.log("Arguments surrounded by square brackets are optional.");
	console.log(" directory title [order-number] [--dry-run]");
	console.log("======================");
	console.log();

	if (args.length < 2) {
		console.log(`expected length of arguments 2 or 3, but got ${args.length}`);
		process.exit(1);
	}

	const directory = relative("./", args[0]);
	const title = args[1];
	/** @type {number | undefined} */
	let n = undefined;
	let isDryRun = false;

	if (args.length >= 3) {
		n = Number.parseInt(args[2]);
	}
	if (args.length === 4) {
		isDryRun = true;
		console.log(
			"INFO: Dry run is enabled. There will be no changes made to filesystem.",
		);
	}

	const files = await readdir(directory);
	files.sort();
	let shouldReorder = false;

	if (n === undefined) {
		n = files.length + 1;
	} else {
		for (const file of files) {
			console.log("checking", file);
			const parts = file.split("-");
			if (file === "summary.md") {
				continue;
			}
			const id = Number.parseInt(parts[0]);

			if (id === n) {
				console.log(`There is already a file with id ${n}.`);
				shouldReorder = true;
			}

			if (shouldReorder && id >= n) {
				parts[0] = (id + 1).toString().padStart(2, "0");
				const oldPath = join(directory, file);
				const newPath = join(directory, parts.join("-"));
				console.log("renaming", oldPath, "-->", newPath);
				if (!isDryRun) {
					await rename(oldPath, newPath);
				}
			}
		}
	}

	const newFileLocation = join(
		directory,
		`${n.toString().padStart(2, "0")}-${title}.md`,
	);
	console.log("writing", newFileLocation, "with the content below");
	const lines = [
		"---",
		`title: ${hyphenCaseToTitleCase(title)}`,
		"sidebar:",
		`  order: ${n}`,
		"---",
	];
	for (const line of lines) {
		console.log(">>>", line);
	}
	if (!isDryRun) {
		await writeFile(newFileLocation, lines.join("\n"));
	}
}

const args = process.argv.slice(2);

insertPage(args);
