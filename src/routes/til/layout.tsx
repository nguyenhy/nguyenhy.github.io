import {
  Slot,
  component$,
  useSignal,
  useStyles$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./layout.scss?inline";
import globalStyles from "./layout.global.scss?inline";
import { useDocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";

export default component$(() => {
  const head = useDocumentHead();
  const category = useSignal("");
  useStyles$(globalStyles);
  useStylesScoped$(styles);
  useVisibleTask$(() => {
    console.log(head);
    category.value = head.frontmatter.meta?.category;
  });
  return (
    <>
      <Header />
      <div class="til h-full flex flex-col justify-center">
        <div class="h-full w-full sm:container sm:max-w-screen-md sm:max-h-[90%] mx-auto flex flex-col">
          <h6 class="header p-2 rounded-t-sm">
            <span>[{category}]&nbsp;</span>
            <span>Today I Learned</span>
          </h6>
          <div class="modal px-2 py-2 h-full w-full rounded-b-sm overflow-auto flex-1">
            <div class="code">
              <Slot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});