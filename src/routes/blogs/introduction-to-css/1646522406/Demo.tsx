import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./demo.css?inline";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <>
      <div class="first">
        <span class="a">first span</span>
        <span class="b">second span</span>
      </div>
      <div class="second">
        <span class="a b c" id="c">
          third span
        </span>
        <span class="d">fourth span</span>
      </div>
    </>
  );
});
