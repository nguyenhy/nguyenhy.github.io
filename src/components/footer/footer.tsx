import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <ul>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/about-me">About me</a>
        </li>
        <li>
          <a href="https://github.com/nguyenhy" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
      <div>
        <a href="https://qwik.builder.io/" target="_blank" class="builder">
          <span>
            Made with ♡ using <strong>Qwik</strong>
          </span>
        </a>
      </div>

      <ul>
        <li>
          <a href="/assets/icon/demo.html">Icon pack</a>
        </li>
      </ul>
    </footer>
  );
});
