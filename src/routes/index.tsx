import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LatestPost } from "~/components/latest-post/LatestPost";
import { HeaderFooterMainLayout } from "~/components/layout/header-footer-main";
import { createDocumentFrontMatter } from "~/components/router-head/router-head.services";

export default component$(() => {
  return (
    <>
      <HeaderFooterMainLayout>
        <div class="w-full min-h-[30vh] flex flex-row justify-start items-center main-container">
          <div>
            <h1 class="font-bold font-logo">Keep calm and code on</h1>
            <p class="text-lg">
              Begin Your Web Development Adventure: Learn, Explore, Create!
            </p>
          </div>
        </div>
        <LatestPost />
      </HeaderFooterMainLayout>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Hytorium blogs",
  frontmatter: createDocumentFrontMatter({}),
};
