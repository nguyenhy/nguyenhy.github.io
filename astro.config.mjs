// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://nguyenhy.github.io",
  integrations: [expressiveCode(), mdx(), sitemap()],
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});
