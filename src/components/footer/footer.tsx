import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div>
        <div class="flex flex-row justify-center">
          <ul>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="https://github.com/nguyenhy" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="/assets/icon/demo.html">Icon pack</a>
            </li>
            <li>
              <a href="/blogs/series">Series</a>
            </li>
          </ul>
        </div>

        <div>
          <a href="https://qwik.builder.io/" target="_blank" class="builder">
            <span>
              Made with ♡ using <strong>Qwik</strong>
            </span>
          </a>
          <div>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=79446bd9-c3a0-477f-aae1-ce48d99fc9bf"
              title="DMCA.com Protection Status"
              class="dmca-badge mt-2 inline-block"
            >
              <img
                class="my-0 mx-auto"
                src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=79446bd9-c3a0-477f-aae1-ce48d99fc9bf"
                alt="DMCA.com Protection Status"
                width={121}
                height={24}
              />
            </a>
          </div>
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
        </div>
      </div>
    </footer>
  );
});
