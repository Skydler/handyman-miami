<template>
  <section
    class="w-full grid grid-cols-1 md:grid-cols-2 items-center p-5 sm:p-20 my-2 bg-[#282828] group"
  >
    <div class="mb-4 space-y-3">
      <div
        class="font-volkhov font-bold text-4xl md:text-5xl lg:text-7xl text-white"
      >
        <div class="flex flex-col">
          <p>
            Turning houses into
            <span class="transition group-hover:text-blue-300">homes</span>,
          </p>
          <p>One project at a time.</p>
        </div>
      </div>
    </div>
    <div>
      <NuxtImg
        preload
        src="/resources/handyman-hero.jpg"
        width="773"
        height="505"
        alt="handyman working"
        title="handyman working"
        sizes="sm:100vw md:50vw lg:400px"
        class="rounded-xl shadow-2xl"
      />
    </div>
  </section>
</template>
