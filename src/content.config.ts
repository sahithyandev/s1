import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  notes: defineCollection({ schema: docsSchema() }),
};
