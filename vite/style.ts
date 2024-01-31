import { resolve } from "path";
import fs from "node:fs/promises";
import dsp from "./theme/tokens.json";

export const breakpoints = {
  "2xsm": 320,
  xsm: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1366,
  "3xl": 1440,
  "4xl": 1680,
  "5xl": 1920,
  "6xl": 2560,
};

export const createScssBreakpointsMap = () => {
  let map = ``;
  for (const key in breakpoints) {
    if (Object.prototype.hasOwnProperty.call(breakpoints, key)) {
      const value = breakpoints[key];
      map += `"${key}": ${value}px,`;
    }
  }
  return `$breakpoints: (${map})`;
};

export const writeScssBreakpointsToFile = (dir: string, content: string) => {
  const path = resolve(dir, "constant/_auto.breakpoint.scss");
  fs.writeFile(path, content);
};

export const createDspTokenMap = () => {
  let output = "";
  const categories = {};
  const ids = {};
  const dsp_entities = dsp.entities;

  for (let index = 0; index < dsp_entities.length; index++) {
    const entity = dsp_entities[index];

    if (!categories[entity.category_id]) {
      categories[entity.category_id] = [];
    }

    categories[entity.category_id].push(entity.id);
    ids[entity.id] = entity;
  }

  const categories_keys = Object.keys(categories);
  for (let index = 0; index < categories_keys.length; index++) {
    const key = categories_keys[index];
    const identity_ids = categories[key].sort();

    // console.log(key, identity_ids);
    output += `${parseDspTokenIdToScssVar(key)}: (\n`;

    for (let index = 0; index < identity_ids.length; index++) {
      const id = identity_ids[index];
      const entity = ids[id];

      if (entity.type === "alias") {
        const ref_id = `${entity.value.replace("{", "").replace("}", "")}`;
        const ref_entity = ids[ref_id];
        if (ref_entity) {
          output += `"${entity.id}": ${ref_entity.value},\n`;
        } else {
          output += `// "${entity.id}": missing_value\n`;
        }
      } else {
        output += `"${entity.id}": ${entity.value},\n`;
      }
    }

    output += `);\n`;
  }

  return output;
};

export const parseDspTokenIdToScssVar = (id: string) => {
  return (
    "$" +
    id
      // md.sys.color.on-primary.light
      .replace("md.", "")
      //
      // sys.color.on-primary.light
      .replace(/\./g, "_")
      //
      // sys_color_on-primary_light
      .replace(/-/g, "__")
    //
    // sys_color_on__primary_light
  );
};

export const parseDspAliasValueIdToScssVar = (id: string) => {
  return parseDspTokenIdToScssVar(id).replace("{", "").replace("}", "");
};

export const writeDspTokenToFile = (dir: string, content: string) => {
  const path = resolve(dir, "constant/_auto.dsp.scss");
  fs.writeFile(path, content);
};

export const autoGenerateStyle = () => {
  const rootPath = resolve("./");
  const stylesPath = resolve(rootPath, "./src/styles");
  return {
    name: "auto-generate-style",
    /**
     * https://rollupjs.org/plugin-development/#buildstart
     */
    buildStart() {
      writeScssBreakpointsToFile(stylesPath, createScssBreakpointsMap());
      writeDspTokenToFile(stylesPath, createDspTokenMap());
    },
  };
};

const remapBreakpointsToPixels = (input) => {
  const output = {};
  for (const key in input) {
    if (Object.hasOwnProperty.call(input, key)) {
      output[key] = `${input[key]}px`;
    }
  }
};

export const breakpointsInPixels = () => remapBreakpointsToPixels(breakpoints);
