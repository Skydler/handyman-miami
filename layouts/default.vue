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
    "Welcome to Handyman Team – Your Trusted Florida Home Improvement Experts. We offer top-quality handyman services across the Sunshine State. From small repairs to complete home renovations, our skilled team is dedicated to enhancing the beauty and functionality of your home. Choose us for reliable, customer-centric services and turn your house into your dream home. Contact us today for a consultation or quote!",
  ogTitle: "Handyman Team",
  ogDescription:
    "Welcome to Handyman Team – Your Trusted Florida Home Improvement Experts. We offer top-quality handyman services across the Sunshine State. From small repairs to complete home renovations, our skilled team is dedicated to enhancing the beauty and functionality of your home. Choose us for reliable, customer-centric services and turn your house into your dream home. Contact us today for a consultation or quote!",
  ogImage: "/resources/handyman-wb.jpg",
  ogUrl: "https://handyman-team.vercel.app/",
  twitterTitle: "Handyman Team",
  twitterDescription:
    "Welcome to Handyman Team – Your Trusted Florida Home Improvement Experts. We offer top-quality handyman services across the Sunshine State. From small repairs to complete home renovations, our skilled team is dedicated to enhancing the beauty and functionality of your home. Choose us for reliable, customer-centric services and turn your house into your dream home. Contact us today for a consultation or quote!",
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
