import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const useRed = useSignal(false);
  const onToggle = $(() => {
    useRed.value = !useRed.value;
  });

  return (
    <>
      <DemoLayout
        title="Demo change text color"
        child={
          <div class="p-2 flex flex-row items-center">
            <DemoButton class="mr-2" onClick$={onToggle}>
              Toggle
            </DemoButton>
            <div>
              <span class={useRed.value ? "text-[red]" : "text-[#19B5FE]"}>
                Welcome to blog: Introduction to Javascript
              </span>
            </div>
          </div>
        }
      />
    </>
  );
});
