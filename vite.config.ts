import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { spawn } from "child_process";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "typescript-check",
      apply: "serve",
      configResolved() {
        // Ejecuta TypeScript check al iniciar el servidor
        const tsc = spawn("node", [
          resolve("node_modules/typescript/bin/tsc"),
          "--noEmit",
        ]);
        tsc.stderr?.pipe(process.stderr);
        tsc.stdout?.pipe(process.stdout);
      },
      handleHotUpdate() {
        // Ejecuta TypeScript check en cada cambio
        const tsc = spawn("node", [
          resolve("node_modules/typescript/bin/tsc"),
          "--noEmit",
        ]);
        tsc.stderr?.pipe(process.stderr);
        tsc.stdout?.pipe(process.stdout);
      },
    },
  ],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
});
