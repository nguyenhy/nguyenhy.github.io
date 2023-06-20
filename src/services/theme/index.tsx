import { component$, event$, useContext } from "@builder.io/qwik";
import { SettingContext } from "../context";
import { getLocalStorage, setLocalStorage } from "../storage/index.services";
import { STORAGE_KEY_SETTING_THEME } from "../storage/index.const";
import type { TThemeType } from "../context";

export const colorSchemeChangeListener = (
  onColorSchemeChange: (isDark: boolean) => void
) => {
  const listener = ({ matches: isDark }: MediaQueryListEvent) => {
    onColorSchemeChange(isDark);
  };
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => listener(event));

  return () =>
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", listener);
};

export const setThemePreference = (theme: TThemeType) => {
  reflectThemePreference(theme);
  return setLocalStorage(STORAGE_KEY_SETTING_THEME, theme);
};

export const reflectThemePreference = (theme: TThemeType) => {
  const firstElementChild = document.firstElementChild;
  if (!firstElementChild) {
    return;
  }

  firstElementChild.classList.remove("light");
  firstElementChild.classList.remove("dark");
  firstElementChild.classList.add(theme);
};

export const getThemePreference = (): TThemeType => {
  const fromLocal = getLocalStorage<TThemeType | null>(
    STORAGE_KEY_SETTING_THEME,
    null
  );

  return (
    fromLocal ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
};

export const ThemeToggle = component$(() => {
  const state = useContext(SettingContext);

  const onClick$ = event$(() => {
    state.theme = state.theme === "light" ? "dark" : "light";
    setThemePreference(state.theme);
  });

  return (
    <>
      <button
        aria-label="toggle theme"
        onClick$={onClick$}
        data-theme={state.theme}
      >
        <i
          class={`inline-block hy-adjust text-xl text-[var(--anchor)] ${
            state.theme === "light" ? "rotate-180" : ""
          }`}
        ></i>
      </button>
    </>
  );
});
