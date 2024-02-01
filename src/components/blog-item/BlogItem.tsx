import type { PageFrontmatter } from "~/components/router-head/router-head.services";

export const BlockItem = ({ item }: { item: PageFrontmatter }) => {
  return (
    <>
      <a
        class={
          "group mt-4 block p-4 border-solid border-[var(--outline-variant)] border-b-[1px]"
        }
        href={item.url ?? ""}
        style={{
          backgroundColor: "rgb(var(--primary-rgb) / 0.05)",
          color: "var(--on-surface)",
        }}
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
};
