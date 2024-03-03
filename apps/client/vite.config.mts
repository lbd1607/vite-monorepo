import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
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
  server: {
    port: 4200,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
