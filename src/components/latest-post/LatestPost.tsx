import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { PageFrontmatter } from "../router-head/router-head.services";
import { BlockItem } from "../blog-item/BlogItem";

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
          if (typeof element.chunk === "function") {
            try {
              const module = await element.chunk();
              blogs.push(module.data);
            } catch (error) {
              console.error(error);
            }
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
      {blogs.map((item) => {
        return <BlockItem key={item.url} item={item} />;
      })}
    </div>
  );
});
