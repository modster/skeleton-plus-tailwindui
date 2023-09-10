import { join } from "node:path";
import { myCustomTheme } from "./my-custom-theme.ts";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { skeleton } from "@skeletonlabs/tw-plugin";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [myCustomTheme],
        preset: [
          {
            name: "modern",
            enhancements: true,
          },
          {
            name: "wintry",
            enhancements: true,
          },
        ],
      },
    }),
  ],
};
