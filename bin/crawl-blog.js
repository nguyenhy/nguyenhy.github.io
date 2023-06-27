const { glob } = require("glob");
const fs = require("node:fs/promises");
const { dirname, resolve } = require("node:path");

const parser = require("gray-matter");

const rootPath = resolve("./");
const blogsPath = resolve(rootPath, "./src/routes/blogs");

const ignoreFile = ["**/menu.md"];

async function allMetaFiles() {
  return await glob("./src/routes/blogs/**/*.{mdx,md}", { ignore: ignoreFile });
}

async function createMetaFile() {
  const files = await allMetaFiles();
  let chunkImport = [];

  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    const itemPath = resolve(item);
    const dirPath = dirname(itemPath);
    const newFilePath = resolve(dirPath, "index.meta.js");

    const mdxContent = await fs.readFile(itemPath, "utf-8");
    const parsed = parser(mdxContent);

    if (parsed.data.meta && parsed.data.meta.hidden) {
      continue
    }

    const importPath = `.${dirPath.replace(blogsPath, "")}/index.meta`
    const module = {
      chunk: '${chunk}',
    }
    if (parsed.data.meta && parsed.data.meta.article && parsed.data.meta.article.published_time) {
      module.published_time = parsed.data.meta.article.published_time
    }
    if (parsed.data.meta && parsed.data.meta.article && parsed.data.meta.article.modified_time) {
      module.modified_time = parsed.data.meta.article.modified_time
    }

    const moduleString = JSON.stringify(module)
      .replace(
        '\"${chunk}\"',
        `() => import("${importPath}")`
      )

    chunkImport.push(moduleString);

    await fs.writeFile(
      newFilePath,
      createMetaContent({
        url: item.replace(/src\/routes\/(.*)\/index.mdx/g, "/$1"),
        ...parsed.data,
      })
    );
  }

  const allMetaPath = resolve(blogsPath, "index.meta.js");
  fs.writeFile(
    allMetaPath,
    [
      `export const data = [ ${chunkImport.join(",")} ]`,
      `export const meta = ${JSON.stringify({ update: Date.now() })}`
    ].join('\n')
  );
  const latestCreated = chunkImport
    .map(chunk => {
      const pattern = /"published_time":(\d+)/;

      const match = chunk.match(pattern);
      if (match) {
        const extractedNumber = match[1];
        return {
          date: extractedNumber,
          data: chunk,
        }
      }

      return null
    })
    .filter(chunk => chunk && chunk.date)
    .sort((a, b) => {
      if (!a.date && !b.date) {
        return 0
      }

      const publishedA = a.date;
      const publishedB = b.date;
      if (publishedA < publishedB) {
        // sort a after b
        return 1;
      }
      if (publishedA > publishedB) {
        // sort a before b
        return -1;
      }

      // names must be equal
      return 0;
    })
    .map(item => item.data)
    .slice(0, 3);

  const latestCreatedMetaPath = resolve(blogsPath, "index.latest-created.meta.js");
  fs.writeFile(
    latestCreatedMetaPath,
    [
      `export const data = [ ${latestCreated.join(",")} ]`,
      `export const meta = ${JSON.stringify({ update: Date.now() })}`
    ].join('\n')
  );
}

function createMetaContent(data) {
  return `export const data = ${JSON.stringify(data)}`;
}

module.exports = {
  createMetaFile,
  allMetaFiles,
  rootPath,
  blogsPath,
};
