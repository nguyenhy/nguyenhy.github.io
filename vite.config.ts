import { HmrContext, defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import { allMetaFiles, blogsPath, createMetaFile, rootPath } from './bin/crawl-blog'
import path from 'path';

const highlightWordColorBgColor = {
  a: 'rgb(196 42 94 / 59%)',
  b: 'rgb(0 103 163 / 56%)',
  c: 'rgb(100 50 255 / 35%)',
};

const highlightWordColor = {
  a: 'rgb(255 225 225 / 100%)',
  b: 'rgb(175 255 255 / 100%)',
  c: 'rgb(225 200 255 / 100%)',
};



const rehypePrettyCodeOptions: Partial<Options> = {
  // Use one of Shiki's packaged themes
  // theme: 'one-dark-pro',
  theme: {
    'one-dark-pro': 'one-dark-pro',
  },
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
  onVisitHighlightedWord(node, id) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
    if (id) {
      const backgroundColor = highlightWordColorBgColor[id];
      const color = highlightWordColor[id];

      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode: any) => {
          childNode.properties.style = ``;
          childNode.properties.className = '';
        });
      }
      const styles: string[] = []
      if(backgroundColor) {
        styles.push(`background-color: ${backgroundColor}`)
      }

      if(color) {
        styles.push(`color: ${color}`)
      }
      node.properties.style = styles.join(';');
    }
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
