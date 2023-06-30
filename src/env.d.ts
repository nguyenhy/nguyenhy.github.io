/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DCMA?: string;
  readonly VITE_GA4?: string;
  readonly VITE_GTM?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
