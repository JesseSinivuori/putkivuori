import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      formats: ["image/avif"],
      sizes: [320, 640, 1280, 1920],
      domains: [],
    },
    webAnalytics: {
      enabled: process.env.PROD ? true : false,
    },
  }),
});
