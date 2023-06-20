import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoGrid.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);

  const Content = () => {
    return (
      <div class="wrapper p-2">
        <div class="box1">One</div>
        <div class="box2">Two</div>
        <div class="box3">Three</div>
      </div>
    );
  };
  return (
    <>
      <DemoLayout
        title="Demo simple Grid layout"
        child={<Content />}
      ></DemoLayout>
    </>
  );
});
