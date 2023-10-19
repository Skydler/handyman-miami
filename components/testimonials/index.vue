<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import Testimonial from "./testimonial.vue";

const testimonials = [
  {
    imgPath: "/resources/sarah_johnson.png",
    quote:
      "“I can't thank Handyman Team enough for the incredible work they did on my kitchen remodel. From start to finish, they were professional, communicative, and the results are stunning. My kitchen is now the heart of my home, and it's all thanks to their expertise.”",
    name: "Sarah Johnson",
    workTitle: "Miami Beach",
  },
  {
    imgPath: "/resources/john_miller.png",
    quote:
      "“I had several odd jobs around the house that had been piling up for months. Handyman Team came to the rescue! They tackled each task with precision and efficiency. I'm impressed with their attention to detail and how they transformed my space. I highly recommend their services.”",
    name: "John Miller",
    workTitle: "Coral Gables",
  },
  {
    imgPath: "/resources/lisa_anderson.png",
    quote:
      "“I was hesitant about hiring a handyman, but Handyman Team exceeded my expectations. They fixed some longstanding issues in my home, and now it feels brand new. The team was courteous, reliable, and their pricing was fair. I couldn't be happier with the results!”",
    name: "Lisa Anderson",
    workTitle: "Kendall",
  },
];
</script>

<template>
  <section class="mt-10 p-6 sm:p-20 font-poppins">
    <div class="text-center mb-20">
      <h1 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
        What people say about us
      </h1>
    </div>
    <Carousel :wrap-around="true">
      <Slide v-for="(testimonial, index) in testimonials" :key="index">
        <div
          class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
        >
          <Testimonial
            :img-path="testimonial.imgPath"
            :quote="testimonial.quote"
            :name="testimonial.name"
            :work-title="testimonial.workTitle"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
