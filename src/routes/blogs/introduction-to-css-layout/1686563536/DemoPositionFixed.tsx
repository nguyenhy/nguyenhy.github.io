import { component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const fixed = useSignal(false);
  const top = useSignal("");
  const left = useSignal("");

  const Content = () => {
    return (
      <>
        <DemoButton
          class="m-2"
          onClick$={(event) => {
            top.value = `${event.x}px`;
            left.value = `${event.y}px`;

            fixed.value = !fixed.value;
          }}
        >
          {fixed.value ? "Hide fixed" : "Show fixed"}
        </DemoButton>
        {fixed.value ? (
          <div
            class="fixed border-2 p-1 rounded-sm border-red-700 bg-red-300/20 text-red-500"
            style={{
              top: top.value,
              left: left.value,
            }}
          >
            positioned element
          </div>
        ) : null}
      </>
    );
  };

  return (
    <DemoLayout title="Demo Position Fixed" child={<Content />}></DemoLayout>
  );
});
