import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { CustomMeta } from "./router-head.services";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <CustomMeta head={head} />

      {head.meta.map((m) => (
        <meta key={m.name ?? m.key} {...m} />
      ))}

      <script src="/font/index.script.js"></script>
      <script src="/theme/index.script.js"></script>

      {head.links.map((l) => (
        <link key={`${l.rel ?? ""}-${l.href}`} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
