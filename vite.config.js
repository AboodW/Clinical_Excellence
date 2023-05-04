import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { vsToken } from "./src/env/environment.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@locator/babel-jsx/dist",
            {
              env: "development",
            },
            // { viteSanityToken: vsToken },
          ],
        ],
      },
    }),
  ],
});
