/// <reference types="vite/client" />

interface ImportMetaEnv {
  /// Formspree (or similar) form endpoint the demo-request modal posts to, e.g.
  /// https://formspree.io/f/xxxxxxxx. Unset shows a "not configured yet" fallback
  /// with a mailto link instead of attempting a request.
  readonly VITE_DEMO_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
