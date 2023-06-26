import type { DocumentHeadValue } from "@builder.io/qwik-city";
import { getValue } from "~/services/options";

export interface CustomFrontmatter {
  meta: Partial<{
    description: string;
    keywords: string[];
    url: string;
    image: string;
    article: Partial<{
      published_time: number;
      modified_time: number;
    }>;
    twitter: Partial<{
      card: string;
    }>;
  }>;
}

export interface PageFrontmatter {
  url?: string;
  title?: string;
  tag?: string[];
  meta: CustomFrontmatter["meta"];
}

export interface CustomDocumentHeadValue extends Required<DocumentHeadValue> {
  readonly frontmatter: Partial<CustomFrontmatter>;
}

const defaultHeaderValue: CustomFrontmatter = {
  meta: {
    description: "",
    keywords: [
      "hytorium",
      "web development",
      "frontend development",
      "blog",
      "js",
      "css",
      "html",
    ],
    url: "https://nguyenhy.github.io/",
    image: "",
    article: {
      published_time: 1645312806,
      modified_time: 0,
    },
    twitter: {
      card: "summary_large_image",
    },
  },
};

export function createDocumentFrontMatter(
  frontmatter: CustomFrontmatter["meta"]
): CustomFrontmatter {
  const output: CustomFrontmatter = {
    meta: {},
  };

  if (!frontmatter) {
    return output;
  }

  const description = getValue(
    frontmatter,
    "description",
    defaultHeaderValue.meta.description
  );
  if (description) {
    output.meta.description = description;
  }

  const keywords = getValue(
    frontmatter,
    "keywords",
    defaultHeaderValue.meta.keywords
  );
  if (keywords) {
    output.meta.keywords = keywords;
  }

  const url = getValue(frontmatter, "url", defaultHeaderValue.meta.url);
  if (url) {
    output.meta.url = url;
  }

  const image = getValue(frontmatter, "image", defaultHeaderValue.meta.image);
  if (image) {
    output.meta.image = image;
  }

  if (frontmatter.article) {
    const modified_time = getValue(frontmatter.article, "modified_time", null);
    if (modified_time) {
      if (!output.meta.article) {
        output.meta.article = {};
      }
      output.meta.article.modified_time = modified_time;
    }

    const published_time = getValue(
      frontmatter.article,
      "published_time",
      null
    );
    if (published_time) {
      if (!output.meta.article) {
        output.meta.article = {};
      }
      output.meta.article.published_time = published_time;
    }
  }

  if (frontmatter.twitter) {
    const card = getValue(
      frontmatter.twitter,
      "card",
      defaultHeaderValue.meta.twitter?.card
    );
    if (card) {
      if (!output.meta.twitter) {
        output.meta.twitter = {};
      }
      output.meta.twitter.card = card;
    }
  }

  return output;
}

export function createMetaTag(property: string, content?: string) {
  return content ? <meta property={property} content={content} /> : null;
}

export function CustomMeta({ head }: { head: CustomDocumentHeadValue }) {
  return (
    <>
      <meta property="type" content="article" />
      <meta property="article" content="author: nguyen hy" />
      <meta property="locale" content="en_US" />
      {createMetaTag("description", head.frontmatter?.meta?.description)}
      {createMetaTag("keywords", head.frontmatter?.meta?.keywords?.join(","))}

      <meta property="og:site_name" content="Hytorium" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      {createMetaTag("og:title", head.title)}
      {createMetaTag("og:description", head.frontmatter?.meta?.description)}
      {createMetaTag("og:url", head.frontmatter?.meta?.url)}
      {createMetaTag("og:image", head.frontmatter?.meta?.image)}
      {createMetaTag(
        "article:published_time",
        head.frontmatter?.meta?.article?.published_time
          ? new Date(
              head.frontmatter?.meta?.article?.published_time * 1000
            ).toISOString()
          : ""
      )}
      {createMetaTag(
        "article:modified_time",
        head.frontmatter?.meta?.article?.modified_time
          ? new Date(
              head.frontmatter?.meta?.article?.modified_time * 1000
            ).toISOString()
          : ""
      )}

      <meta name="twitter:card" content="summary_large_image" />
      {createMetaTag("twitter:card", head.frontmatter?.meta?.twitter?.card)}
      {createMetaTag("twitter:title", head.title)}
      {createMetaTag(
        "twitter:description",
        head.frontmatter?.meta?.description
      )}
      {createMetaTag("twitter:image", head.frontmatter?.meta?.image)}
      {createMetaTag("twitter:url", head.frontmatter?.meta?.url)}
    </>
  );
}
