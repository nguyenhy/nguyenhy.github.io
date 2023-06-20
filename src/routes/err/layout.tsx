import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <h1 class="text-bold text-4xl text-center font-logo my-4 h-full flex items-center">
        <span class="capitalize">
          <Slot></Slot>
        </span>
      </h1>
    </>
  );
});
