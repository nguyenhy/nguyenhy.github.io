import path from "path";

import type { HmrContext } from "vite";
import { blogsPath, createMetaFile } from "./bin/crawl-blog";

export const buildMdxMetadata = () => {
  return {
    name: "mdx-metadata",
    /**
     * https://rollupjs.org/plugin-development/#buildstart
     */
    buildStart() {
      createMetaFile();
    },
    /**
     * https://vitejs.dev/guide/api-plugin#handlehotupdate
     */
    handleHotUpdate(context: HmrContext) {
      const file = context.file;
      const ext = path.extname(file);
      const relativeFromBlogs = file.replace(blogsPath, "");
      if ([".mdx", ".md"].includes(ext) && relativeFromBlogs) {
        createMetaFile();
      }
    },
  };
};
