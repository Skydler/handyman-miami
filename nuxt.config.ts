// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "vue3-carousel-nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          volkhov: ["Volkhov", "serif"],
        },
      },
    },
  },
});
