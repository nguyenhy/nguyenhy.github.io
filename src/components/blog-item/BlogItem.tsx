import type { PageFrontmatter } from "~/components/router-head/router-head.services";

export const BlockItem = ({ item }: { item: PageFrontmatter }) => {
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
};
