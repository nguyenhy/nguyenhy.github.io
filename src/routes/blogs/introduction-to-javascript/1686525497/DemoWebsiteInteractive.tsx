import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const date = useSignal(new Date());
  const changeSpanStyle = $(() => {
    date.value = new Date();
  });

  return (
    <DemoLayout
      title="Demo interactive"
      child={
        <div class="p-2">
          <span>Current datetime is: </span>
          <span>{date.value.toLocaleString()}</span>
          <DemoButton class="ml-2 mr-2" onClick$={changeSpanStyle}>
            Update
          </DemoButton>
        </div>
      }
    />
  );
});
