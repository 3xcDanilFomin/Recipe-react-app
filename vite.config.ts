import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "Vitejs config PWA",
    short_name: "VitePWA",
    description:
      "ViteJS example to show how to create PWA app throw the easyest way",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

export default defineConfig({
  plugins: [react(), vitePWA],
  server: {
    open: "/",
  },
});
