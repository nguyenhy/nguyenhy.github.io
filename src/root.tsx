import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.scss";
import { SettingContext } from "./services/context";
import { useContextProvider } from "@builder.io/qwik";
import type { IContextSettingState } from "./services/context";
import {
  colorSchemeChangeListener,
  getThemePreference,
  setThemePreference,
} from "./services/theme";
import {
  DcmaVerification,
  GoogleAnalytics,
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "./components/seo/analytics";

const HeadFont = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Atomic+Age&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/assets/icon/style.css" />
    </>
  );
};

const HeadFavicon = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/favicon/icon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/favicon/icon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/favicon/icon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/favicon/icon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/favicon/icon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/favicon/icon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/favicon/icon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/favicon/icon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/icon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/favicon/icon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/icon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/favicon/icon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/icon/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/assets/favicon/icon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff"></meta>
    </>
  );
};

const AfterStartHead = () => {
  return (
    <>
      {import.meta.env.VITE_DCMA ? (
        <DcmaVerification code={import.meta.env.VITE_DCMA} />
      ) : null}
      {import.meta.env.VITE_GA4 ? (
        <GoogleAnalytics tag={import.meta.env.VITE_GA4} />
      ) : null}
      {import.meta.env.VITE_GTM ? (
        <GoogleTagManagerHead tag={import.meta.env.VITE_GTM} />
      ) : null}
    </>
  );
};

const BeforeEndHead = () => {
  return <></>;
};

const AfterStartBody = () => {
  return (
    <>
      {import.meta.env.VITE_GTM ? (
        <GoogleTagManagerBody tag={import.meta.env.VITE_GTM} />
      ) : null}
    </>
  );
};

export default component$(() => {
  const settingStore = useStore<IContextSettingState>({});
  useContextProvider(SettingContext, settingStore);
  useVisibleTask$(() => {
    const theme = getThemePreference();
    if (theme) {
      settingStore.theme = theme;
    }
    return colorSchemeChangeListener((isDark) => {
      settingStore.theme = isDark ? "dark" : "light";
      setThemePreference(settingStore.theme);
    });
  });
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCityProvider>
      <head>
        <AfterStartHead />
        <meta charSet="utf-8" />
        <HeadFont />
        <HeadFavicon />
        <RouterHead />
        <BeforeEndHead />
      </head>
      <body lang="en">
        <AfterStartBody />
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
