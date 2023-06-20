import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoFlexItems.css?inline";
import { DemoProperties } from "~/components/demo/DemoProperties";

export default component$(() => {
  useStylesScoped$(style);
  const items = ["row", "row-reverse", "column", "column-reverse"];
  const selected = useSignal("row");
  const onSelect = $((item: string) => {
    selected.value = item;
  });
  const onReset = $(() => {
    selected.value = "row";
  });

  return (
    <DemoProperties
      title="Demo Flexbox direction"
      properties={items}
      selected={selected.value}
      onReset={onReset}
      property={(item) => {
        return (
          <button class="w-full h-full p-2" onClick$={() => onSelect(item)}>
            flex-direction: {item}
          </button>
        );
      }}
      content={(item) => {
        return (
          <div
            class="wrapper text-center border-2"
            style={{ "flex-direction": item }}
          >
            <div class="border p-1 m-1">item 1</div>
            <div class="border p-1 m-1">item 2</div>
            <div class="border p-1 m-1">item 3</div>
            <div class="border p-1 m-1">item 4</div>
          </div>
        );
      }}
    />
  );
});
