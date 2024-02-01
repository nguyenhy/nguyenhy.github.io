import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { createPaginationNumber } from "./index.services";
import type { IPaginationData, IPaginationProps } from "./index.types";
import { SettingContext } from "~/services/context";
import styles from "./index.scss?inline";

export const Pagination = component$((props: IPaginationProps) => {
  useStylesScoped$(styles);
  const state = useContext(SettingContext);
  let pagination: IPaginationData;
  if (props.pagination) {
    pagination = props.pagination;
  } else if (props.options) {
    pagination = createPaginationNumber(props.options);
  } else {
    return null;
  }

  return (
    <div class={["flex flex-row", state.theme].join(" ")}>
      {pagination.pages.map(async (page) => {
        const url =
          typeof props.url === "string"
            ? props.url.replace("${index}", `${page}`)
            : await props.url(page);

        return (
          <a
            key={page}
            href={url}
            class={`w-[30px] h-[30px] leading-[30px] text-center rounded-sm mr-1 ${
              page === pagination.currentPageIndex ? "color-secondary" : ""
            }`}
          >
            <span>{page + 1}</span>
          </a>
        );
      })}
    </div>
  );
});
