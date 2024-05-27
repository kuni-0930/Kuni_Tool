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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/Kuni_Tool/guides/example/" },
            { label: "Test", link: "/Kuni_Tool/guides/test/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
