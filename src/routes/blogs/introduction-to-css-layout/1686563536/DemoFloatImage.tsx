import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoProperties } from "~/components/demo/DemoProperties";

export default component$(() => {
  const items = ["left", "right", "none"];
  const selected = useSignal("none");
  const onSelect = $((item: string) => {
    selected.value = item;
  });
  const onReset = $(() => {
    selected.value = "none";
  });

  return (
    <DemoProperties
      title="Demo Float Around Text"
      properties={items}
      selected={selected.value}
      onReset={onReset}
      property={(item) => {
        return (
          <button class="w-full h-full p-2" onClick$={() => onSelect(item)}>
            float: {item}
          </button>
        );
      }}
      content={(item) => {
        return (
          <div>
            <div
              class="p-1 mx-auto my-0 w-[200px] h-[200px] bg-black text-center leading-[200px]"
              style={{ float: item }}
            >
              <span>image</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              minus reprehenderit, deleniti quasi nesciunt labore corporis,
              excepturi, necessitatibus consectetur aut et dolorem! Quos
              eligendi eveniet alias ducimus quasi veritatis harum!
            </p>
          </div>
        );
      }}
    />
  );
});
