import { Slot, component$ } from "@builder.io/qwik";
import { HeaderFooterMainLayout } from "~/components/layout/header-footer-main";

export default component$(() => {
  return (
    <>
      <HeaderFooterMainLayout>
        <div class="blogs main-container">
          <article>
            <Slot />
          </article>
        </div>
      </HeaderFooterMainLayout>
    </>
  );
});
