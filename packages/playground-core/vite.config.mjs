import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      entryRoot: "lib",
      outDir: "dist",
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "lib/main.ts"),
        web: resolve(__dirname, "lib/web.ts"),
      },
      name: "playground-core",
    },
  },
});
