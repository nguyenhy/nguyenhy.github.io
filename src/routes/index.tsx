import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LatestPost } from "~/components/latest-post/LatestPost";
import { createDocumentFrontMatter } from "~/components/router-head/router-head.services";

export default component$(() => {
  return (
    <>
      <div class="w-full min-h-[30vh] flex flex-row justify-start items-center">
        <div class="max-w-[50vw] xsm:max-w-full sm:max-w-full">
          <h4 class="text-4xl font-bold font-logo">Keep calm and code on</h4>
          <p class="text-lg">
            Begin Your Web Development Adventure: Learn, Explore, Create!
          </p>
        </div>
      </div>
      <LatestPost />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Hytorium blogs",
  frontmatter: createDocumentFrontMatter({}),
};
