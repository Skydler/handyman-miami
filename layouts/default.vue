<script setup>
import AppHeader from "~/components/app/header.vue";
import AppFooter from "~/components/app/footer.vue";
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <AppHeader/>
    <slot />
    <AppFooter />
  </div>
</template>
