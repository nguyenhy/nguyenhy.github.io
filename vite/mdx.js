const path = require("path");
const { blogsPath, createMetaFile } = require("./crawl-blog");

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
      const relativeFromBlogs = file.replace(blogsPath, "");
      if ([".mdx", ".md"].includes(ext) && relativeFromBlogs) {
        createMetaFile();
      }
    },
  };
};
