import "./style.css";
// import { run } from "playground";
import { run } from "playground-core/web";
// import { run as runWeb } from "playground/web";

const $app = document.querySelector("#app");

if ($app) {
  console.log(run);
  // runWeb({
  //   source: {
  //     html: `<p>asd</p>`,
  //     css: `p { color: red}`,
  //   },
  // });
}
