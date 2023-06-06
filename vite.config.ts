import { HmrContext, defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import rehypePrettyCode from 'rehype-pretty-code';
import { allMetaFiles, blogsPath, createMetaFile, rootPath } from './bin/crawl-blog'
import path from 'path';


const rehypePrettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  // Or your own JSON theme
  // Keep the background or use a custom background color?
  keepBackground: true,
 
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};

function buildMdxMetadata() {
	return {
		name: 'mdx-metadata',
		buildStart() {
      createMetaFile();
		},
    handleHotUpdate(context: HmrContext) {
      const file = context.file
      const ext = path.extname(file)
      const relativeFromBlogs = file.replace(blogsPath, '')
      if(['.mdx', '.md'].includes(ext) && relativeFromBlogs) {
        createMetaFile();
      }
    }

	};
}


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
          rehypePlugins: [
            [
              rehypePrettyCode,
              rehypePrettyCodeOptions,
            ],
          ],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
      buildMdxMetadata(),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
