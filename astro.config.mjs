import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://acacius03.github.io",
  base: "/Acacius-Porfolio",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Quicksand",
      cssVariable: "--font-Quicksand",
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/Quicksand-Light.ttf"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Quicksand-Regular.ttf"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Quicksand-Medium.ttf"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Quicksand-SemiBold.ttf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Quicksand-Bold.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Roboto",
      cssVariable: "--font-Roboto",
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/Roboto-Light.ttf"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Roboto-Regular.ttf"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Roboto-Medium.ttf"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Roboto-SemiBold.ttf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Roboto-Bold.ttf"],
          },
        ],
      },
    },
  ],
});
