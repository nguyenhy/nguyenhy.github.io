import { component$ } from "@builder.io/qwik";
import { BlockItem } from "../blog-item/BlogItem";

import { data as latest_data } from "../../routes/blogs/index.latest-created.meta";

export const LatestPost = component$(() => {
  return (
    <div>
      {latest_data.length ? (
        <div class="h-[1px] bg-slate-700 dark:bg-white w-full"></div>
      ) : null}
      {latest_data.map((item) => {
        return <BlockItem key={item.url} item={item} />;
      })}
      {latest_data.length ? (
        <a class="mt-4 inline-block" href="/blogs/">
          Read more
        </a>
      ) : null}
    </div>
  );
});
