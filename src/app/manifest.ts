import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeLab — Online Compiler",
    short_name: "CodeLab",
    description:
      "Free online compiler. Write, compile and run 80+ programming languages in your browser.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    icons: [
      {
        src: "/favicon.png",
        sizes: "261x261",
        type: "image/png",
      },
    ],
  };
}
