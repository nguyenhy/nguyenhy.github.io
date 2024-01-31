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
  let modules = [];

  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    const itemPath = resolve(item);
    const dirPath = dirname(itemPath);
    const newFilePath = resolve(dirPath, "index.meta.js");

    const mdxContent = await fs.readFile(itemPath, "utf-8");
    const parsed = parser(mdxContent);

    if (parsed.data.meta && parsed.data.meta.hidden) {
      continue;
    }

    const importPath = `.${dirPath.replace(blogsPath, "")}/index.meta`;
    const module = {
      chunk: "${chunk}",
    };
    if (
      parsed.data.meta &&
      parsed.data.meta.article &&
      parsed.data.meta.article.published_time
    ) {
      module.published_time = parsed.data.meta.article.published_time;
    }
    if (
      parsed.data.meta &&
      parsed.data.meta.article &&
      parsed.data.meta.article.modified_time
    ) {
      module.modified_time = parsed.data.meta.article.modified_time;
    }

    const moduleString = JSON.stringify(module).replace(
      '"${chunk}"',
      `() => import("${importPath}")`
    );
    chunkImport.push(moduleString);

    const finalModule = {
      url: item.replace(/src\/routes\/(.*)\/index.mdx/g, "/$1"),
      ...parsed.data,
    };
    modules.push(finalModule);
    await fs.writeFile(newFilePath, createMetaContent(finalModule));
  }

  const allMetaPath = resolve(blogsPath, "index.meta.js");
  fs.writeFile(
    allMetaPath,
    [
      `export const data = [ ${chunkImport.join(",")} ]`,
      `export const meta = ${JSON.stringify({ update: Date.now() })}`,
    ].join("\n")
  );

  const latest = modules
    .sort(
      (a, b) => b.meta.article.published_time - a.meta.article.published_time
    )
    .slice(0, 5);

  const latestCreatedMetaPath = resolve(
    blogsPath,
    "index.latest-created.meta.js"
  );
  fs.writeFile(
    latestCreatedMetaPath,
    [
      `export const data = ${JSON.stringify(latest)}`,
      `export const meta = ${JSON.stringify({ update: Date.now() })}`,
    ].join("\n")
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
