const path = require("path");
const { getPath, createMetaFile } = require("./crawl-blog");

export const buildMdxMetadata = () => {
  return {
    name: "mdx-metadata",
    /**
     * https://vitejs.dev/guide/api-plugin#handlehotupdate
     * @param {import('vite').HmrContext}
     */
    handleHotUpdate(context) {
      const file = context.file;
      const ext = path.extname(file);
      const relativeFromBlogs =
        file.replace(getPath("blogs"), "") ||
        file.replace(getPath("blogs"), "");
      if ([".mdx", ".md"].includes(ext) && relativeFromBlogs) {
        createMetaFile("blogs");
        createMetaFile("til");
      }
    },
  };
};
