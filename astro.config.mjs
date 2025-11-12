import path from "path";
import { fileURLToPath } from "url";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, "./.env"),
});

// https://astro.build/config
export default defineConfig({
  site: "https://nguyenhy.github.io",
  integrations: [expressiveCode(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypeSlug,
        {
          prefix: "slug_",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend", // or 'wrap', 'before'
          linkProperties: {
            className: "anchor",
            ariaHidden: "true",
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});
