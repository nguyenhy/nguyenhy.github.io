import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import QwikLogo from "../icons/qwik";
import styles from "./header.css?inline";

interface IHeaderProps {}

export default component$<IHeaderProps>(() => {
  useStyles$(styles);
  const { url } = useLocation();

  return (
    <header class="sticky top-0 z-10 h-20 w-full py-2 bg-inherit overflow-hidden">
      <div class="2xl:max-w-5xl container mx-auto flex flex-row justify-between items-center">
        <a class="no-underline" href="/">
          {/* h-20 ->  5rem: 80px */}
          {/* p-2 -> 0.5rem: 8px */}
          <QwikLogo height={80 - 8 * 2} />
        </a>
        <nav>
          <a href="/blogs" class={{ active: url.pathname.startsWith("/docs") }}>
            Blogs
          </a>
          <a
            href="/about-me"
            class={{ active: url.pathname.startsWith("/about-me") }}
          >
            <span>About Me</span>
          </a>
        </nav>
      </div>
      <div class="w-full mt-1 border-b border-solid border-b-black"></div>
    </header>
  );
});
