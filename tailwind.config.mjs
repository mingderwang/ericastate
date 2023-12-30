/** @type {import('tailwindcss').Config} */
import flowbite from "astro-flowbite";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite(),// require("flowbite/plugin"),
    require("flowbite-typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
