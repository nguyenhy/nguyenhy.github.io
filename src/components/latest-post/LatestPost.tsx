import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { PageFrontmatter } from "../router-head/router-head.services";
import { BlockItem } from "../blog-item/BlogItem";
import { importer } from "~/services/importer";

export const LatestPost = component$(() => {
  const loading = useSignal(true);
  const blogs = useStore<PageFrontmatter[]>([]);
  useVisibleTask$(async () => {
    try {
      const latest = await import(
        "../../routes/blogs/index.latest-created.meta"
      );
      if (Array.isArray(latest.data)) {
        for (let index = 0; index < latest.data.length; index++) {
          const element = latest.data[index];
          const chunk = await importer(element.chunk, latest.meta.update);
          if (chunk) {
            blogs.push(chunk.data);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
    loading.value = false;
  });
  return (
    <div>
      {blogs.length ? (
        <div class="h-[1px] bg-slate-700 dark:bg-white w-full"></div>
      ) : null}
      {blogs.map((item) => {
        return <BlockItem key={item.url} item={item} />;
      })}
      {blogs.length ? <a href="/blogs/">Read more</a> : null}
    </div>
  );
});
