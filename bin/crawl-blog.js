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
    const newFilePath = resolve(dirPath, "index.meta.ts");

    const mdxContent = await fs.readFile(itemPath, "utf-8");
    const parsed = parser(mdxContent);

    chunkImport.push(
      `() => import(".${dirPath.replace(blogsPath, "")}/index.meta")`
    );

    await fs.writeFile(
      newFilePath,
      createMetaContent({
        url: item.replace(/src\/routes\/(.*)\/index.mdx/g, "/$1"),
        ...parsed.data,
      })
    );
  }

  const allMetaPath = resolve(blogsPath, "index.meta.ts");
  fs.writeFile(
    allMetaPath,
    `export const data : (()=>Promise<{data:any}>)[] = [ ${chunkImport.join(
      ","
    )} ]`
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
