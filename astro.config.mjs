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
          label: "ツール一覧",
          autogenerate: { directory: "tools" },
        },
        {
          label: "利用規約",
          autogenerate: { directory: "license" },
        },
        {
          label: "参照",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css", "./src/styles/global.css"],
      favicon: "/images/favicon.ico",
    }),
  ],
});
