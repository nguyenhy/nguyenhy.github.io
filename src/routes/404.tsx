import { component$ } from "@builder.io/qwik";
import Error404 from "./err/404/index";
import ErrorLayout from "./err/layout";
import { createErrorCode } from "./err/code";
import type { DocumentHead } from "@builder.io/qwik-city";
import { createDocumentFrontMatter } from "~/components/router-head/router-head.services";

export default component$(() => {
  return (
    <ErrorLayout>
      <Error404 />
    </ErrorLayout>
  );
});

export const head: DocumentHead = {
  title: createErrorCode(404),
  frontmatter: createDocumentFrontMatter({}),
};
