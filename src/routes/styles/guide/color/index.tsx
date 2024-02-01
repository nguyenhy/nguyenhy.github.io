import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.scss?inline";

const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];
const palettes = [
  "error",
  "neutral-variant",
  "neutral",
  "primary",
  "secondary",
  "tertiary",
];
const roles = ["primary", "secondary", "tertiary", "error"];

export default component$(() => {
  useStyles$(`body { background-color: white; color: black}`);
  useStylesScoped$(styles);

  return (
    <>
      <div class="container container-sm mx-auto my-5">
        <section class="section-style section--color">
          <h2 class="section-label">Color Source</h2>
          <div class="section-container">
            <div class="row row--palette">
              <div class="col col--primary"></div>
            </div>
          </div>
        </section>
        <section class="section-style section--palette">
          <h2 class="section-label">Palette</h2>
          <div class="section-container">
            {palettes.map((type) => {
              return (
                <>
                  <div class={`row row--palette row--${type}`}>
                    {tones.map((tone) => (
                      <div key={tone} class={`col col--${tone}`}>
                        <span class={tone > 60 ? "tone-light" : "tone-dark"}>
                          {tone}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section class="section-style section--role">
          <h2 class="section-label">Role</h2>
          <div class="section-container light">
            {roles.map((role) => {
              return (
                <div key={role} class={`row row--${role}`}>
                  <div class="col col--role">{role}</div>
                  <div class="col col--on-role">on-{role}</div>
                  <div class="col col--role-container">{role}-container</div>
                  <div class="col col--on-role-container">
                    on-{role}-container
                  </div>
                </div>
              );
            })}
            <div class="row row--background">
              <div class="col col--role">background</div>
              <div class="col col--on-role">on-background</div>
            </div>
            <div class="row row--surface">
              <div class="col col--role">surface</div>
              <div class="col col--on-role">on-surface</div>
            </div>
            <div class="row row--surface-variant">
              <div class="col col--role">surface-variant</div>
              <div class="col col--on-role">on-surface-variant</div>
            </div>
            <div class="row row--outline">
              <div class="col col--outline">outline</div>
              <div class="col col--outline-variant">outline-variant</div>
            </div>
          </div>
          <div class="section-container dark">
            {roles.map((role) => {
              return (
                <div key={role} class={`row row--${role}`}>
                  <div class="col col--role">{role}</div>
                  <div class="col col--on-role">on-{role}</div>
                  <div class="col col--role-container">{role}-container</div>
                  <div class="col col--on-role-container">
                    on-{role}-container
                  </div>
                </div>
              );
            })}
            <div class="row row--background">
              <div class="col col--role">background</div>
              <div class="col col--on-role">on-background</div>
            </div>
            <div class="row row--surface">
              <div class="col col--role">surface</div>
              <div class="col col--on-role">on-surface</div>
            </div>
            <div class="row row--surface-variant">
              <div class="col col--role">surface-variant</div>
              <div class="col col--on-role">on-surface-variant</div>
            </div>
            <div class="row row--outline">
              <div class="col col--outline">outline</div>
              <div class="col col--outline-variant">outline-variant</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});
