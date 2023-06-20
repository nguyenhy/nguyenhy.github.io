import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";

export default component$(() => {
  useStyles$(styles);

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
