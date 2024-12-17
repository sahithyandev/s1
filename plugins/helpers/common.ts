import type { STARLIGHT_CONFIG } from "../../config.mjs";

export function safeSplit(
	str: string,
	splitter: string,
	maximumSplits?: number,
) {
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

export async function waitForServer(
	url: string,
	timeout = 10000,
	interval = 500,
) {
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

export function extractSectionIndicesFromSidebar(
	sidebar: (typeof STARLIGHT_CONFIG)["sidebar"],
) {
	if (sidebar === undefined) return {};
	const sectionIndex: Record<string, number> = {};

	for (const module of sidebar) {
		if (typeof module === "string" || !("items" in module)) continue;

		let index = 0;
		for (let i = 0; i < module.items.length; i++) {
			const item = module.items[i];
			if (typeof item === "string" || !("autogenerate" in item)) continue;
			sectionIndex[item.autogenerate.directory] = index;
			index += 1;
		}
	}

	return sectionIndex;
}
