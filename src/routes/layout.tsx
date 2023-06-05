import { useContextProvider, useOnDocument, useStore } from "@builder.io/qwik";
import { $, component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import type { ILayoutContextState } from "./layout.types";
import { LayoutContext } from "./layout.const";

export default component$(() => {
  const layoutStore = useStore<ILayoutContextState>({ scrollTop: -1 });
  useContextProvider(LayoutContext, layoutStore);

  useOnDocument(
    "scroll",
    $(() => {
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      layoutStore.scrollTop = scrollTop;
    })
  );
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
