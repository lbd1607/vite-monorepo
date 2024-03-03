import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import checker from "vite-plugin-checker";

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
  ],
  server: {
    port: 4200,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
