<script setup>
import Card from "./card.vue";
const cards = [
  {
    imgPath: "resources/pipe.png",
    imgAltText: "Broken Pipe Image",
    title: "Plumbing",
    description:
      "Installation, repair and hook-up of any water or gas appliance.",
  },
  {
    imgPath: "resources/flooring.png",
    imgAltText: "Tiling Image",
    title: "Flooring",
    description:
      "Installation, repair, and maintenance of a wide range of flooring materials.",
  },
  {
    imgPath: "resources/repairs.png",
    imgAltText: "Repairs",
    title: "Repairs",
    description:
      "Our skilled team ensures top-notch, reliable solutions for all your repair and maintenance requirements.",
  },
  {
    imgPath: "resources/painting.png",
    imgAltText: "Painting House Image",
    title: "Painting",
    description:
      "Our skilled team specializes in interior and exterior painting for residential and commercial properties.",
  },
];
</script>

<template>
  <section class="text-center mt-10 p-6 sm:p-20 font-poppins">
    <h1 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
      Our Services
    </h1>
    <div
      class="grid grid-cols-1 items-center text-center sm:grid-cols-2 lg:grid-cols-4 p-8 sm:p-0 gap-8 sm:gap-16 my-4 sm:my-12"
    >
      <Card
        v-for="item in cards"
        :img-path="item.imgPath"
        :img-alt-text="item.imgAltText"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>
