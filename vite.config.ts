import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "Сборник рецептов Рецептум",
    short_name: "Рецептум",
    theme_color: "#171717",
    description:
      "Рецептум — Ваш карманный гид в мире кулинарии, где каждый рецепт превращается в шедевр",
    icons: [
      {
        src: "/assets/images/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/pwa-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/images/pwa-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
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
