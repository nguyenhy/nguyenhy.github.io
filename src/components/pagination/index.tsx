import { createPaginationNumber } from "./index.services";
import type { IPaginationData, IPaginationProps } from "./index.types";

export const Pagination = (props: IPaginationProps) => {
  let pagination: IPaginationData;
  if (props.pagination) {
    pagination = props.pagination;
  } else if (props.options) {
    pagination = createPaginationNumber(props.options);
  } else {
    return null;
  }

  return (
    <div class="flex flex-row">
      {pagination.pages.map(async (page) => {
        const url =
          typeof props.url === "string"
            ? props.url.replace("${index}", `${page}`)
            : props.url(page);
        return (
          <a
            key={page}
            href={url}
            class={`w-[30px] h-[30px] leading-[30px] text-center rounded-sm mr-1 ${
              page === pagination.currentPageIndex
                ? "bg-accent-700 text-white"
                : "bg-black/20 dark:text-white text-black "
            }`}
          >
            <span>{page + 1}</span>
          </a>
        );
      })}
    </div>
  );
};
