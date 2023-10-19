<script setup>
import Hero from "~/components/hero/index.vue";
import Services from "~/components/services/index.vue";
import Works from "~/components/works/index.vue";
import Testimonials from "~/components/testimonials/index.vue";
import FinalMessage from "~/components/end_message/index.vue";

useSeoMeta({
  title: "Handyman",
});
</script>

<template>
  <Hero />
  <Services />
  <Works />
  <Testimonials />
  <FinalMessage />
</template>
