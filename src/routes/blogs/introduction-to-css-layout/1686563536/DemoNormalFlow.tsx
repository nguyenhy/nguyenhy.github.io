import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoNormalFlow.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);

  const Content = () => {
    return (
      <div class="bg-white text-black p-2">
        <div class="unreset">
          <h1>Welcome to Hytorium</h1>
          <p>This is a paragraph of text.</p>
          <img
            src="https://picsum.photos/200/200"
            alt="Example image"
            width="200"
            height="200"
          />
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <p>Another paragraph of text.</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <DemoLayout title="Demo normal flow" child={<Content />}></DemoLayout>
    </>
  );
});
