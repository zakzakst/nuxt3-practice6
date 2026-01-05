import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/global.css"],
  vite: {
    plugins: [tailwindcss()],
    vue: {
      features: {
        optionsAPI: false,
      },
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === "production",
          drop_debugger: process.env.NODE_ENV === "production",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiDomain: process.env.API_DOMAIN,
    },
  },
});
