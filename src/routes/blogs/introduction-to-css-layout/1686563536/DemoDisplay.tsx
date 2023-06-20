import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoDisplay.css?inline";
import { DemoProperties } from "~/components/demo/DemoProperties";

export default component$(() => {
  useStylesScoped$(style);

  const items = ["block", "inline-block", "none", "grid", "flex"];
  const selected = useSignal<string>("block");
  const onReset = $(() => {
    selected.value = "block";
  });

  const onSelect = $((item: string) => {
    selected.value = item;
  });

  return (
    <DemoProperties
      title="demo display property"
      selected={selected.value}
      properties={items}
      onReset={onReset}
      property={(item) => {
        return (
          <button class="w-full h-full p-2" onClick$={() => onSelect(item)}>
            display: {item}
          </button>
        );
      }}
      content={(item) => {
        return (
          <div class="-mt-1 -ml-1 text-center" style={{ display: item }}>
            <div class="box border p-1 m-1">item 1</div>
            <div class="box border p-1 m-1">item 2</div>
            <div class="box border p-1 m-1">item 3</div>
            <div class="box border p-1 m-1">item 4</div>
          </div>
        );
      }}
    />
  );
});
