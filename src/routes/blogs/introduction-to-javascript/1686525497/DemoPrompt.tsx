import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const content = useSignal("");
  const onClick = $(() => {
    const name = prompt("Enter a name", "Anonymous");
    content.value = `Hi '${name || "Anonymous"}', welcome to Hytorium blogs`;
  });

  return (
    <>
      <DemoLayout
        title="Demo prompts username"
        child={
          <div class="p-2 flex flex-row items-center">
            <DemoButton class="mr-2" onClick$={onClick}>
              Click me
            </DemoButton>
            {content.value ? <div>{content.value}</div> : null}
          </div>
        }
      />
    </>
  );
});
