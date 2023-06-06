import { component$ } from "@builder.io/qwik";
import { createErrorCode } from "../code";

export default component$(() => {
  return <>{createErrorCode(403)}</>;
});
