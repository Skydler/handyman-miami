<template>
  <section class="text-center mt-10">
    <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
      Our Services
    </h2>
    <div
      class="grid grid-cols-1 items-center text-center sm:grid-cols-2 lg:grid-cols-4 p-8 sm:p-0 gap-8 sm:gap-16 my-4 sm:my-12"
    >
      <!-- Card 1-->
      <div class="relative group">
        <div
          class="space-y-3 cursor-pointer mt-2 transition group-hover:border p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl"
        >
          <NuxtImg
            class="mx-auto h-20 w-20"
            src="resources/pipe.png"
            alt="Broken Pipe Image"
          />
          <p class="text-[#1E1D4C] font-semibold">Plumbing</p>
          <p class="text-xs text-gray-500">
            Installation, Repair and hook-up of any Water or Gas Appliance.
          </p>
        </div>
      </div>
      <!-- Card 2-->
      <div class="relative group">
        <div
          class="space-y-3 cursor-pointer mt-2 transition group-hover:border p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl"
        >
          <NuxtImg
            class="mx-auto h-20 w-20"
            src="resources/flooring.png"
            alt="Tiling Image"
          />
          <p class="text-[#1E1D4C] font-semibold">Flooring</p>
          <p class="text-xs text-gray-500">
            Installation, repair, and maintenance of a wide range of flooring
            materials for residential and commercial properties.
          </p>
        </div>
      </div>
      <!-- Card 3-->
      <div class="relative group">
        <div
          class="space-y-3 cursor-pointer mt-2 transition group-hover:border p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl"
        >
          <NuxtImg
            class="mx-auto h-20 w-20"
            src="resources/repairs.png"
            alt="Screwdriver and Wrench Image"
          />
          <p class="text-[#1E1D4C] font-semibold">Repairs</p>
          <p class="text-xs text-gray-500">
            Our skilled team ensures top-notch, reliable solutions for all your
            repair and maintenance requirements.
          </p>
        </div>
      </div>
      <!-- Card 4-->
      <div class="relative group">
        <div
          class="space-y-3 cursor-pointer mt-2 transition group-hover:border p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl"
        >
          <NuxtImg
            class="mx-auto h-20 w-20"
            src="resources/painting.png"
            alt="Painting House Image"
          />
          <p class="text-[#1E1D4C] font-semibold">Painting</p>
          <p class="text-xs text-gray-500">
            Our skilled team specializes in interior and exterior painting for
            residential and commercial properties.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
