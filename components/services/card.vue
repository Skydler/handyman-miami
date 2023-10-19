<script setup>
const props = defineProps({
  imgPath: String,
  imgAltText: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="relative group">
    <div
      class="space-y-3 cursor-pointer mt-2 transition p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl"
    >
      <NuxtImg
        class="mx-auto h-20 w-20"
        :src="props.imgPath"
        :alt="props.imgAltText"
        :title="props.imgAltText"
        height="80"
        width="80"
      />
      <p class="text-[#1E1D4C] font-semibold">{{ props.title }}</p>
      <p class="text-s text-gray-500">{{ props.description }}</p>
    </div>
  </div>
</template>
