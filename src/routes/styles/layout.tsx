import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
