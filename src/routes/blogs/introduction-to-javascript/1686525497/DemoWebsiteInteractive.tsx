import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const date = useSignal(new Date());
  const changeSpanStyle = $(() => {
    date.value = new Date();
  });

  return (
    <>
      <span>Current datetime is: </span>
      <span>{date.value.toLocaleString()}</span>
      <button
        class="bg-black/20 rounded-sm p-1 ml-1 text-white dark:text-white"
        onClick$={changeSpanStyle}
      >
        <span>Update</span>
      </button>
    </>
  );
});
