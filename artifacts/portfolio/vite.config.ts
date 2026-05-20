/**
 * vite.config.ts — Vite build configuration for the portfolio app.
 *
 * Key responsibilities:
 *  - Reads PORT and BASE_PATH from environment variables (injected by the
 *    workspace runner). Throws immediately if either is missing so the build
 *    fails loudly rather than silently serving on the wrong port/path.
 *  - Configures React (JSX transform) and Tailwind CSS plugins.
 *  - Sets up the path alias @/ → src/ and @assets/ → attached_assets/
 *    so components can import local assets without relative path hell.
 *  - Deduplicated React instances prevent version-mismatch runtime errors
 *    when multiple packages depend on React.
 *  - Dev server binds to 0.0.0.0 and allows all hosts so it works behind
 *    the workspace reverse proxy without CORS/host rejections.
 *  - Build output goes to dist/public so the static files can be served
 *    directly by any CDN or static host.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// ── PORT validation ────────────────────────────────────────────────────────
// The workspace runner sets PORT via environment variable. We read it here
// and validate early so a missing or corrupt value fails at startup, not
// silently at runtime.

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// ── BASE_PATH validation ───────────────────────────────────────────────────
// BASE_PATH tells Vite what sub-path the app is served under (e.g. "/" or
// "/portfolio"). Required so asset URLs and the router base are correct.

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

export default defineConfig({
  // base — the public URL prefix for all assets (JS bundles, images, etc.)
  base: basePath,

  plugins: [
    react(),        // Enables JSX transform and React Fast Refresh in dev
    tailwindcss(),  // Processes Tailwind utility classes at build time
  ],

  resolve: {
    alias: {
      // @/ maps to src/ — use this for all internal component imports
      "@": path.resolve(import.meta.dirname, "src"),
      // @assets/ maps to the attached_assets directory at the workspace root.
      // Images uploaded via the chat are placed there and referenced with this alias.
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    // Deduplicate React so packages that bundle their own copy don't cause
    // "cannot use hooks across different React instances" errors.
    dedupe: ["react", "react-dom"],
  },

  // root — tells Vite where index.html lives (the artifact directory itself)
  root: path.resolve(import.meta.dirname),

  build: {
    // outDir — static build output; serve this folder from any CDN or host
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,  // clean the output folder before each build
  },

  server: {
    port,
    host: "0.0.0.0",      // bind to all interfaces so the proxy can reach it
    allowedHosts: true,    // allow any Host header (needed behind the proxy)
    fs: {
      strict: true,
      deny: ["**/.*"],     // block access to dotfiles (e.g. .env) via the dev server
    },
  },

  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
