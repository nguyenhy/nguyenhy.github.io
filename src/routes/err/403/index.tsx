import { component$ } from "@builder.io/qwik";
import { createErrorCode } from "../code";
import type { DocumentHead } from "@builder.io/qwik-city";
import { createDocumentFrontMatter } from "~/components/router-head/router-head.services";

const title = createErrorCode(403);

export default component$(() => {
  return <>{title}</>;
});

export const head: DocumentHead = {
  title: title,
  frontmatter: createDocumentFrontMatter({}),
};
