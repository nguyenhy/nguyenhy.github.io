import { $, component$, useSignal } from "@builder.io/qwik";
import { DemoButton } from "~/components/demo/DemoButton";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  const interval: any = { id: 0 };
  const date = useSignal(new Date());
  const onStart = $(() => {
    clearInterval(interval.id);
    date.value = new Date();
    interval.id = setInterval(() => {
      date.value = new Date();
    }, 1000);
  });

  const onStop = $(() => {
    clearInterval(interval.id);
  });

  return (
    <DemoLayout
      title="Demo update content realtime"
      child={
        <div class="p-2">
          <span>Current datetime is: </span>
          <span>{date.value.toLocaleString()}</span>
          <DemoButton class="ml-2 mr-2" onClick$={onStart}>
            Start
          </DemoButton>
          <DemoButton class="mr-2" onClick$={onStop}>
            Stop
          </DemoButton>
        </div>
      }
    />
  );
});
