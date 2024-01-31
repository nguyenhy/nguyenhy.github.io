import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";
import { HeaderFooterMainLayout } from "~/components/layout/header-footer-main";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <HeaderFooterMainLayout>
        <div class="blogs">
          <article>
            <Slot />
          </article>
        </div>
      </HeaderFooterMainLayout>
    </>
  );
});
