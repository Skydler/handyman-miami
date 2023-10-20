<script setup>
const props = defineProps({
  imgPath: String,
  quote: String,
  name: String,
  workTitle: String,
});
</script>

<template>
  <div
    class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
  />
  <div
    class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
  />
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <!-- <img class="mx-auto h-12" :src="props.imgPath" :alt="props.name" /> -->
    <figure class="mt-10">
      <blockquote
        class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
      >
        <p>{{ props.quote }}</p>
      </blockquote>
      <figcaption class="mt-10">
        <NuxtImg
          class="mx-auto h-10 w-10 rounded-full"
          :src="props.imgPath"
          :alt="props.name"
          :title="props.name"
          height="40"
          width="40"
          sizes="sm:40px"
        />
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">{{ props.name }}</div>
          <svg
            viewBox="0 0 2 2"
            width="3"
            height="3"
            aria-hidden="true"
            class="fill-gray-900"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">{{ props.workTitle }}</div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
