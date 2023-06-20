import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="w-full h-[30vh] flex flex-row justify-start">
        <div class="max-w-[50vw] mt-[10vh]">
          <h4 class="text-4xl font-bold font-logo">Keep calm and code on</h4>
          <p class="text-lg">
            Begin Your Web Development Adventure: Learn, Explore, Create!
          </p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Hytorium blogs",
};
