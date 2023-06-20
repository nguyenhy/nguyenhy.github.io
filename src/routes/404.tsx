import { component$ } from "@builder.io/qwik";
import Error404 from "./err/404/index";
import ErrorLayout from "./err/layout";

export default component$(() => {
  return (
    <ErrorLayout>
      <Error404 />
    </ErrorLayout>
  );
});
