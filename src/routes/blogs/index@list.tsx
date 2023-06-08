import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { data } from "./index.meta";
import "./index@list.css";

async function getPaginationData(index: number, length: number = 5) {
  const importers = data.slice(index * length, (index + 1) * length);
  const output: { data: any }[] = [];
  for (let index = 0; index < importers.length; index++) {
    const importer = importers[index];
    if (typeof importer === "function") {
      try {
        const module = await importer();
        output.push(module.data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return output;
}

export default component$(() => {
  // useStyles$(styles);
  const blogs = useSignal<Record<string, any>[]>([]);
  useVisibleTask$(() => {
    getPaginationData(0).then((value) => {
      blogs.value = value;
    });
  });

  return (
    <>
      <div class="card">
        {blogs.value.map((item) => {
          return (
            <>
              <a class="group mb-4 block" href={item.url}>
                <div class="py-4">
                  <h4 class="group-hover:underline text-3xl mb-2 text-bold font-bold text-[var(--text-color)]">
                    <span>{item?.title ?? ""}</span>
                  </h4>
                  {item?.description ? (
                    <p class="text-lg text-[var(--secondary-text-color)]">
                      {item.description}
                    </p>
                  ) : null}
                  <span class="text-sm text-[var(--secondary-text-color)]">
                    {item.author ?? null}
                    <span> | </span>
                    {item.date ?? null}
                  </span>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
});
