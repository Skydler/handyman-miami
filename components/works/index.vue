<script setup>
import Card from "./card.vue";
const works = [
  {
    imgPath: "/resources/plumbing-example.jpg",
    title: "Plumbing and bathroom installation",
  },
  {
    imgPath: "/resources/drywall-installation-example.jpg",
    title: "Drywall and electric installation",
  },
  {
    imgPath: "/resources/flooring.jpg",
    title: "Flooring and painting",
  },
  {
    imgPath: "/resources/window-repair-example.jpg",
    title: "Window repair and door installation",
  },
];
</script>

<template>
  <section class="p-6 sm:p-20 font-poppins">
    <div class="text-center mb-20">
      <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
        Our recent works
      </h2>
    </div>
    <div class="flex justify-around flex-wrap mt-5 ">
      <div v-for="item in works" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <Card :img="item.imgPath" :title="item.title" />
      </div>
    </div>
  </section>
</template>
