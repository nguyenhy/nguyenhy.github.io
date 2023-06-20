import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const show = useSignal(false);
  const onToggle = $(() => {
    show.value = !show.value;
  });

  return (
    <>
      <DemoLayout
        title="Demo change elements"
        child={
          <div class="p-2 flex flex-row items-center">
            <DemoButton class="mr-2" onClick$={onToggle}>
              Toggle
            </DemoButton>
            <div>
              {show.value ? (
                <span class="font-bold text-red-700">Welcome to Hytorium</span>
              ) : (
                <span class="italic">
                  Welcome to blog: Introduction to Javascript
                </span>
              )}
            </div>
          </div>
        }
      />
    </>
  );
});
