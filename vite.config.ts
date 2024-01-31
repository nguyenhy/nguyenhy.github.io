import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypePrettyCode from "rehype-pretty-code";
import { buildMdxMetadata } from "./vite/mdx";
import { rehypePrettyCodeOptions } from "./vite/rehype";
import { autoGenerateStyle } from "./vite/style";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        mdxPlugins: {
          rehypeSyntaxHighlight: false,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
      buildMdxMetadata(),
      autoGenerateStyle(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
