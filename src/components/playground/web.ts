import { Exception } from "./exception";

export interface CombinerOptions {
  html?: string;
  css?: string;
  js?: string;
}

export interface SanboxOptions {
  sandbox: string[];
  frameBorder: string;
  allow: string[];
  name: string;
  id: string;
}

export interface Options {
  source: CombinerOptions;
  container: string | Element;
  sanbox?: Partial<SanboxOptions>;
}

export const combiner = (options: CombinerOptions): string => {
  const html = (options.html || "").trim();
  const css = (options.css || "").trim();
  const js = (options.js || "").trim();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
  doc.body.insertAdjacentHTML("beforeend", `<script>${js}</script>`);

  return doc.documentElement.outerHTML;
};

export const DEFAULT_SANBOX = [
  "allow-modals",
  "allow-forms",
  "allow-pointer-lock",
  "allow-popups",
  "allow-same-origin",
  "allow-scripts",
];

export const DEFAULT_ALLOW = [
  "geolocation",
  "midi",
  "camera",
  "microphone",
  "speaker",
];

export const createSanboxIframe = (options?: SanboxOptions) => {
  const iframe = document.createElement("iframe");

  const sanbox = options?.sandbox || DEFAULT_SANBOX;
  iframe.sandbox = sanbox.join(" ");

  iframe.frameBorder = options?.frameBorder || "0";

  const allow = options?.allow || DEFAULT_ALLOW;
  iframe.allow = allow.join(";");

  if (options?.name) {
    iframe.name = options.name;
  }

  if (options?.id) {
    iframe.id = options.id;
  }

  return iframe;
};

export const resolveContainer = (
  container: string | Element,
): Element | null => {
  if (typeof container === "string") {
    const query = document.querySelector(container);
    if (query) {
      return query;
    }
  } else if (container instanceof Element) {
    return container;
  }
  return null;
};

export const run = (options: Options) => {
  const container = options.container
    ? resolveContainer(options.container) || null
    : null;
  if (!container) {
    throw new Exception();
  }

  const html = combiner(options.source);

  const iframe = createSanboxIframe();
  iframe.srcdoc = html;

  container.appendChild(iframe);
};
