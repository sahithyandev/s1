const { join } = require("node:path");
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
	// Changes the cache location for Puppeteer.
	cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
