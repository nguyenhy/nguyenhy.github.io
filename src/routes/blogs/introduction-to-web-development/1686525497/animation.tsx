import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./animation.css?inline";

export default component$(() => {
  const showAnimation = useSignal(true);
  const toggleAnimation$ = $(() => {
    showAnimation.value = false;
    setTimeout(() => {
      showAnimation.value = true;
    }, 10);
  });
  useStylesScoped$(style);

  // bounce-in-fwd 1.1s both 2

  return (
    <>
      <div class="text-center">
        <div class="flex flex-row justify-center items-center">
          <div class="border rounded-sm p-4">
            <div
              class={`font-bold text-2xl inline-block gradient-text ${
                showAnimation.value ? "animation" : ""
              }`.trim()}
            >
              Bounce-in animation
            </div>
            <button
              class="ml-2"
              onClick$={toggleAnimation$}
              title="Click to refresh animation"
            >
              <span class="hy-refresh"></span>
            </button>
          </div>
        </div>
        <div class="text-sm italic mt-1">
          Click refresh icon to review animation
        </div>
      </div>
    </>
  );
});
