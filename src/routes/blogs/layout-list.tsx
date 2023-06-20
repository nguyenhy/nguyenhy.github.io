import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="blogs">
        <article>
          <Slot />
        </article>
      </div>
    </>
  );
});
