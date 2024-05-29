import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://kuni-0930.github.io/",
  outDir: "./docs",
  base: "/Kuni_Tool",
  integrations: [
    starlight({
      title: "Kuni_Tool",
      social: {
        github: "https://github.com/kuni-0930/Kuni_Tool",
      },
      sidebar: [
        {
          label: "概要",
          autogenerate: { derectory: "summary" },
        },
        {
          label: "使い方",
          autogenerate: { derectory: "HowTo" },
        },
        {
          label: "利用規約",
          autogenerate: { derectory: "license" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
