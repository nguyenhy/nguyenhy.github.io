import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

import { Pagination } from "~/components/pagination";

import { data } from "./index.meta.js";
import "./index@list.css";
import type { IPaginationData } from "~/components/pagination/index.types";
import { createPaginationNumber } from "~/components/pagination/index.services";
import type { PageFrontmatter } from "~/components/router-head/router-head.services";
import { createDocumentFrontMatter } from "~/components/router-head/router-head.services";
import { BlockItem } from "~/components/blog-item/BlogItem.js";

async function getPaginationData(
  currentPageIndex: number,
  itemPerPage: number,
  callback: (module: PageFrontmatter) => void
) {
  for (let index = 0; index < itemPerPage; index++) {
    const itemIndex = currentPageIndex * itemPerPage + index;
    const importer = data[itemIndex];

    if (typeof importer.chunk === "function") {
      try {
        const module = await importer.chunk();
        callback(module.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export default component$(() => {
  const loc = useLocation();
  const currentPageIndex = useSignal(0);
  const store = useSignal<IPaginationData | null>(null);
  const blogs = useStore<PageFrontmatter[]>([]);

  useVisibleTask$(() => {
    const page = loc.url.searchParams.get("page") ?? "";
    const pageInt = parseInt(page, 10);
    const index = pageInt >= 0 ? pageInt : 0;

    currentPageIndex.value = index;

    const itemPerPage = 5;
    const paginationData = createPaginationNumber({
      totalItems: data.length,
      itemPerPage: itemPerPage,
      currentPageIndex: index,
    });

    store.value = paginationData;

    getPaginationData(
      paginationData.currentPageIndex,
      itemPerPage,
      (module) => {
        blogs.push(module);
      }
    );
  });

  return (
    <>
      <div class="card">
        {blogs.map((item) => {
          return <BlockItem key={item.url} item={item} />;
        })}
      </div>
      <div>
        {store.value ? (
          <Pagination
            pagination={store.value}
            url={(index) => {
              return index > 0 ? `/blogs?page=${index}` : "/blogs";
            }}
          />
        ) : null}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hyotrium blogs",
  frontmatter: createDocumentFrontMatter({}),
};
