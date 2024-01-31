import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(`body { background-color: white; color: black}`);
  useStylesScoped$(styles);

  return (
    <>
      <div class="container container-sm mx-auto my-5">
        <h1>Typography</h1>

        <section class="section-style section--font">
          <h2 class="section-label">Font</h2>
          <div class="section-container">Atomic Age</div>
        </section>

        <section class="section-style section--headlines">
          <h2 class="section-label">Headlines</h2>
          <div class="section-container">
            <div class="row row--head">
              <div class="col">Desktop</div>
              <div class="col">Mobile</div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h1>Headlines 1</h1>
                <div>Bold - 56 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h1>Headlines 1</h1>
                <div>Bold - 32 / 120%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h2>Headlines 2</h2>
                <div>Bold - 40 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h2>Headlines 2</h2>
                <div>Bold - 28 / 120%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h3>Headlines 3</h3>
                <div>Bold - 28 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h3>Headlines 3</h3>
                <div>Bold - 20 / 120%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h4>Headlines 4</h4>
                <div>Bold - 20 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h4>Headlines 4</h4>
                <div>Bold - 18 / 120%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h5>Headlines 5</h5>
                <div>Bold - 18 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h5>Headlines 5</h5>
                <div>Bold - 16 / 120%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <h6>Headlines 6</h6>
                <div>Bold - 16 / 120%</div>
              </div>
              <div class="col col--mobile">
                <h6>Headlines 6</h6>
                <div>Bold - 14 / 120%</div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-style section--body">
          <h2 class="section-label">Body</h2>
          <div class="section-container">
            <div class="row row--head">
              <div class="col">Desktop</div>
              <div class="col">Mobile</div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-1">Body 1</div>
                <div>Regular - 18 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-1">Body 1</div>
                <div>Regular - 16 / 140%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-1-bold">Body 1 Bold</div>
                <div>Bold - 18 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-1-bold">Body 1 Bold</div>
                <div>Bold - 16 / 140%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-2">Body 2</div>
                <div>Regular - 16 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-2">Body 2</div>
                <div>Regular - 16 / 140%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-2-bold">Body 2 Bold</div>
                <div>Bold - 16 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-2-bold">Body 2 Bold</div>
                <div>Bold - 14 / 140%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-3">Body 3</div>
                <div>Regular - 14 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-3">Body 3</div>
                <div>Regular - 12 / 140%</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <div class="body-3-bold">Body 3 Bold</div>
                <div>Bold - 14 / 140%</div>
              </div>
              <div class="col col--mobile">
                <div class="body-3-bold">Body 3 Bold</div>
                <div>Bold - 12 / 140%</div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-style section--button">
          <h2 class="section-label">Button</h2>
          <div class="section-container">
            <div class="row row--head">
              <div class="col">Desktop</div>
              <div class="col">Mobile</div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <button class="default">Default</button>
                <div>Regular - 20 / 24</div>
              </div>
              <div class="col col--mobile">
                <button class="small">Small</button>
                <div>Regular - 16 / 24</div>
              </div>
            </div>
            <div class="row">
              <div class="col col--desktop">
                <button class="small">Small</button>
                <div>Regular - 16 / 24</div>
              </div>
              <div class="col col--mobile"></div>
            </div>
          </div>
        </section>

        <section class="section-style section--fields">
          <h2 class="section-label">Fields</h2>
          <div class="section-container">
            <div class="row">
              <div class="col">
                <div class="placeholder">Text_Placeholder</div>
                <div>Regular - 16 / 24</div>
              </div>
              <div class="col">
                <div class="title">Text_Title</div>
                <div>Regular - 12 / 16</div>
              </div>
              <div class="col">
                <div class="description">Text_Description</div>
                <div>Regular - 12 / 16</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});
