import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Recebecom",
    short_name: "Recebecom",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFEA",
    theme_color: "#6B1126",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.png",
        sizes: "380x380",
        type: "image/png",
      },
    ],
  };
}
