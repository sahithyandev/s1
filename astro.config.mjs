import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import { CREATE_E_BOOK, SITE_HREF, STARLIGHT_CONFIG } from "./config.mjs";
import generatePdfsIntegration from "./plugins/generate-pdfs";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	site: SITE_HREF,
	integrations: [
		CREATE_E_BOOK
			? generatePdfsIntegration({
					credits: {
						text: "From Sahithyan's S1",
						href: SITE_HREF,
						size: 10,
					},
				})
			: false,
		starlight(STARLIGHT_CONFIG),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
