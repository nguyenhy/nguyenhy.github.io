// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nguyenhy.github.io",
  integrations: [expressiveCode(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});
