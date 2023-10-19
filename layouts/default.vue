<script setup>
import AppHeader from "~/components/app/header.vue";
import AppFooter from "~/components/app/footer.vue";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],

  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  description:
    "Welcome to Handyman Team - Your Florida Home Improvement Experts. From small repairs to complete renovations, we're here to enhance your home. Contact us today for quality service and your dream home!",
  ogTitle: "Handyman Team",
  ogDescription:
    "Welcome to Handyman Team - Your Florida Home Improvement Experts. From small repairs to complete renovations, we're here to enhance your home. Contact us today for quality service and your dream home!",
  ogImage: "/resources/handyman-wb.jpg",
  ogUrl: "https://handyman-team.vercel.app/",
  twitterTitle: "Handyman Team",
  twitterDescription:
    "Welcome to Handyman Team - Your Florida Home Improvement Experts. From small repairs to complete renovations, we're here to enhance your home. Contact us today for quality service and your dream home!",
  twitterImage: "/resources/handyman-wb.jpg",
  twitterCard: "summary",
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
