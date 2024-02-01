import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import HeaderLogo from "../logo";
import styles from "./header.css?inline";
import { ThemeToggle } from "~/services/theme";

interface IHeaderProps {}

export default component$<IHeaderProps>(() => {
  useStylesScoped$(styles);
  const { url } = useLocation();

  return (
    <header class="sticky top-0 z-10 grow-0 shrink-0 basis-20 w-full py-2 overflow-hidden color-primary">
      <div class="px-1 2xl:max-w-5xl container mx-auto flex flex-row justify-between items-center">
        <a class="no-underline" href="/">
          {/* h-20 ->  5rem: 80px */}
          {/* p-2 -> 0.5rem: 8px */}
          <HeaderLogo height={80 - 8 * 2} />
        </a>
        <div class="flex flex-row items-center">
          <nav>
            <a
              href="/blogs"
              class={{ active: url.pathname.startsWith("/docs") }}
            >
              Blogs
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});
