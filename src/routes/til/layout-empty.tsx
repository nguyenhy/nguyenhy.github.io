import { Slot, component$ } from "@builder.io/qwik";
import { HeaderFooterMainLayout } from "~/components/layout/header-footer-main";

export default component$(() => {
  return (
    <HeaderFooterMainLayout>
      <Slot></Slot>
    </HeaderFooterMainLayout>
  );
});
