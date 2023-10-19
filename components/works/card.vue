<script setup>
const props = defineProps({
  img: String,
  title: String,
});
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5">
    <NuxtImg
      class="w-full w-[400px] h-[600px]"
      :src="props.img"
      :alt="props.title"
      :title="props.title"
      width="400"
      height="600"
      fit="cover"
    />
    <div class="px-6 py-2 text-center">
      <p class="text-gray-700 text-base">{{ props.title }}</p>
    </div>
  </div>
</template>
