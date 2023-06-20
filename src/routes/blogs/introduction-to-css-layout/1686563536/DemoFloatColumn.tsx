import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoFloatColumn.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);

  const Content = () => {
    return (
      <div class="wrapper">
        <header class="m-2 rounded dark:bg-transparent/40 dark:text-white bg-transparent/30 text-black">
          <a href="#demo-home">Home</a>
          <a href="#demo-products">Product</a>
          <a href="#demo-services">Services</a>
          <a href="#demo-about">About</a>
          <input type="search" name="search" placeholder="Search..." />
        </header>
      </div>
    );
  };

  return (
    <DemoLayout title="Demo Float Column" child={<Content />}></DemoLayout>
  );
});
