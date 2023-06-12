import { $, component$, useSignal } from "@builder.io/qwik";

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
    <>
      <span>Current datetime is: </span>
      <span>{date.value.toLocaleString()}</span>
      <button
        class="bg-black/20 rounded-sm p-1 ml-1 text-white dark:text-white"
        onClick$={onStart}
      >
        <span>Start</span>
      </button>
      <button
        class="bg-black/20 rounded-sm p-1 ml-1 text-white dark:text-white"
        onClick$={onStop}
      >
        <span>Stop</span>
      </button>
    </>
  );
});
