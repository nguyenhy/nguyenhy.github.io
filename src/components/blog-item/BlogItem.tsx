import type { PageFrontmatter } from "~/components/router-head/router-head.services";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./BlogItem.scss?inline";

export const BlockItem = component$(({ item }: { item: PageFrontmatter }) => {
  useStylesScoped$(styles);
  return (
    <>
      <a
        class={
          "item group mt-4 block p-4 border-solid border-[var(--outline-variant)] border-b-[1px] no-underline"
        }
        href={item.url ?? ""}
      >
        <div class="py-4">
          <h3 class="group-hover:underline mb-2">
            <span>{item.title ?? ""}</span>
          </h3>
          {item.meta?.description ? (
            <p class="body-2 no-underline">{item.meta.description}</p>
          ) : null}
          <span class="body-3 text-[var(--on-surface-variant)] italic no-underline">
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
});
