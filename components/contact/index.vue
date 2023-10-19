<script setup>
import ContactInfo from "./contactInfo.vue";
</script>

<template>
  <section class="mb-auto font-poppins">
    <div class="p-5 sm:p-20 my-2 bg-[#282828] text-center">
      <h2
        class="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl"
      >
        Contact Us!
      </h2>
    </div>

    <div class="flex justify-center">
      <div class="w-full lg:w-1/2 m-5">
        <p class="mt-3 text-lg">
          Got a home improvement project that needs expert attention? We're here
          to help! Our team of skilled handymen is a phone call away. <br />
          Reach out to us today, and let's get started on making your home the
          best it can be.
        </p>
      </div>
    </div>
  </section>

  <ContactInfo />

  <section>
    <div class="flex justify-center flex-col items-center my-10">
      <h2 class="text-[#14183E] font-bold text-3xl">Chat with us!</h2>
      <NuxtLink href="https://wa.me/+12066362456" rel="external">
        <NuxtImg
          class="rounded"
          src="resources/whatsapp_qr.png"
          alt="Qr code for Whatsapp"
          title="Qr code for Whatsapp"
          height="300"
          width="300"
        />
      </NuxtLink>
    </div>
    <div class="rounded-lg h-96">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        title="map"
        marginheight="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Florida%20USA&amp;ie=UTF8&amp;t=&amp;z=6&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </section>
</template>
