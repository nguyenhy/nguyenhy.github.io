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
          return (
            <>
              <a class="group mb-4 block" href={item.url ?? ""}>
                <div class="py-4">
                  <h4 class="group-hover:underline text-3xl mb-2 text-bold font-bold text-[var(--text-color)]">
                    <span>{item.title ?? ""}</span>
                  </h4>
                  {item.meta?.description ? (
                    <p class="text-lg text-[var(--secondary-text-color)]">
                      {item.meta.description}
                    </p>
                  ) : null}
                  <span class="text-sm text-[var(--secondary-text-color)]">
                    <span>hyn | </span>

                    {item.meta?.article?.modified_time
                      ? `Update at: ${new Date(
                          item.meta?.article?.modified_time * 1000
                        ).toLocaleString()}`
                      : item.meta?.article?.published_time
                      ? new Date(
                          item.meta?.article?.published_time * 1000
                        ).toLocaleString()
                      : null}
                  </span>
                </div>
              </a>
            </>
          );
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
