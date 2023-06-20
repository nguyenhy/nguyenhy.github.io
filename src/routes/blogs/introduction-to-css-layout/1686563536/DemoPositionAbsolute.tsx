import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoPosition.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);

  const Content = () => {
    return (
      <div class="wrapper">
        <div class="item">normal flow element</div>
        <div class="item positioned absolute top-0 left-0">
          positioned element
        </div>
        <div class="item">normal flow element</div>
      </div>
    );
  };

  return (
    <DemoLayout title="Demo Position Absolute" child={<Content />}></DemoLayout>
  );
});
