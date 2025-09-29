import { defineConfig } from "vite";
import { resolve } from "path";

const DEV_BUNDLE = process.env.DEV_BUNDLE === "true";

export default defineConfig({
  resolve: {
    alias: DEV_BUNDLE
      ? []
      : [
          {
            find: "playground-core/web",
            replacement: resolve(__dirname, `../dist/web.js`),
          },
          {
            find: "playground-core",
            replacement: resolve(__dirname, `../dist/main.js`),
          },
        ],
  },
});
