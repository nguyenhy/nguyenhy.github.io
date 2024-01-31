import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";
import { HeaderFooterMainLayout } from "~/components/layout/header-footer-main";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <HeaderFooterMainLayout>
        <h1 class="text-bold text-4xl text-center font-logo my-4 h-full flex items-center">
          <span class="capitalize">
            <Slot></Slot>
          </span>
        </h1>
      </HeaderFooterMainLayout>
    </>
  );
});
