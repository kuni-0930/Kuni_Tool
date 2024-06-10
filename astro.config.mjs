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
          label: "使い方",
          autogenerate: { directory: "HowTo" },
        },
        {
          label: "概要",
          autogenerate: { directory: "summary" },
        },
        {
          label: "利用規約",
          autogenerate: { directory: "license" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
