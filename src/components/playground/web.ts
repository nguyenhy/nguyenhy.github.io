import { Exception } from "./exception";

export interface CombinerOptions {
    html?: string;
    css?: string | string[];
    js?: string | string[];
}

export interface SanboxOptions {
    sandbox: string;
    allow: string;
}

export interface Options {
    source: CombinerOptions;
    container: string | Element;
    sanbox?: HTMLIFrameElement | Partial<SanboxOptions>;
}

export const combiner = (options: CombinerOptions): string => {
    const html = (options.html || "").trim();
    const css = [];

    if (Array.isArray(options.css)) {
        css.push(...options.css);
    } else if (options.css) {
        css.push(options.css);
    }

    const js = [];
    if (Array.isArray(options.js)) {
        js.push(...options.js);
    } else if (options.js) {
        js.push(options.js);
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    for (let index = 0; index < css.length; index++) {
        const item = css[index];
        if (item && typeof item === "string") {
            const content = item.trim();
            doc.head.insertAdjacentHTML(
                "beforeend",
                `<style>${content}</style>`,
            );
        }
    }
    for (let index = 0; index < js.length; index++) {
        const item = js[index];
        if (item && typeof item === "string") {
            const content = item.trim();
            doc.body.insertAdjacentHTML(
                "beforeend",
                `<script>${content}</script>`,
            );
        }
    }

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

export const createSanboxIframe = (options?: Partial<SanboxOptions>) => {
    const iframe = document.createElement("iframe");

    const { sandbox: rawSandbox, allow: rawAllow } = options || {};

    iframe.sandbox = rawSandbox || DEFAULT_SANBOX.join(" ");
    iframe.allow = rawAllow || DEFAULT_ALLOW.join(";");

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

    const iframe =
        options.sanbox instanceof HTMLIFrameElement
            ? options.sanbox
            : createSanboxIframe(options.sanbox);
    iframe.srcdoc = html;

    container.appendChild(iframe);

    return iframe;
};
