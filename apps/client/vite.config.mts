import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ["path"],
    }),
    react({
      babel: {
        plugins: ["relay"],
      },
    }),
    relay,
    checker({
      typescript: true,
    }),
    tsConfigPaths({
      ignoreConfigErrors: true,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react-modal"])],
    },
  },
  server: {
    port: 4200,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
