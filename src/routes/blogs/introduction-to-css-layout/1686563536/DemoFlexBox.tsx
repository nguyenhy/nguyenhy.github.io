import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoFlexBox.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);
  const Content = () => {
    return (
      <>
        <div class="wrapper p-2">
          <div class="box1">One</div>
          <div class="box2">Two</div>
          <div class="box3">Three</div>
        </div>
      </>
    );
  };

  return <DemoLayout title="Demo Flexbox direction" child={<Content />} />;
});
