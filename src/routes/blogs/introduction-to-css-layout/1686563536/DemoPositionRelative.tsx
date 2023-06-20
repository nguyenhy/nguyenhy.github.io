import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoPosition.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);

  const Content = () => {
    return (
      <div class="wrapper">
        <div class="item">normal flow element</div>
        <div class="item positioned relative top-[20px] left-[20px]">
          positioned element
        </div>
        <div class="item">normal flow element</div>
      </div>
    );
  };

  return (
    <DemoLayout title="Demo Position Relative" child={<Content />}></DemoLayout>
  );
});
