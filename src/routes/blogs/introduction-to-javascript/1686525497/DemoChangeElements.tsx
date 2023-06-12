import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const show = useSignal(false);
  const onToggle = $(() => {
    show.value = !show.value;
  });

  return (
    <>
      <div>
        {show.value ? (
          <span class="font-bold">Welcome to Hytorium</span>
        ) : (
          <span class="italic">
            Welcome to blog: Introduction to Javascript
          </span>
        )}
      </div>
      <button
        class="bg-black/20 rounded-sm p-1 ml-1 text-white dark:text-white"
        onClick$={onToggle}
      >
        <span>Toggle</span>
      </button>
    </>
  );
});
