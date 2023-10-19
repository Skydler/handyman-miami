<script setup>
import IconContact from "./icons/contact.vue";
import IconEmail from "./icons/email.vue";
import IconMarker from "./icons/marker.vue";
import IconWhatsapp from "./icons/whatsapp.vue";

const form = ref({
  name: "",
  lastName: "",
  phone: "",
  address: "",
  message: "",
});

const handymanEmail = "handymanteam28@gmail.com";

function sendEmail() {
  let subject = `Website email from ${form.value.name} ${form.value.lastName}`;
  let body = `Hi Team, I'm ${form.value.name} ${form.value.lastName}. My phone is ${form.value.phone} and address ${form.value.address}. My message is: ${form.value.message}`;
  window.open(
    `mailto:${handymanEmail}?subject=${subject}&body=${body}`,
    "_blank",
  );
}
</script>

<template>
  <section class="flex justify-center">
    <div class="container px-6 py-12 mx-auto w-full lg:w-1/2 m-5">
      <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <span
              class="inline-block p-3 text-[#14183E] rounded-full bg-blue-100/80"
            >
              <IconEmail />
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">Email</h2>
            <p class="mt-2 text-sm text-gray-500">We answer quickly!</p>
            <p class="mt-2 text-sm text-[#14183E]">
              <NuxtLink
                :href="'mailto:' + handymanEmail"
                target="_blank"
                rel="external"
              >
                {{ handymanEmail }}
              </NuxtLink>
            </p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-[#14183E] rounded-full bg-blue-100/80"
            >
              <IconWhatsapp />
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">Live chat</h2>
            <p class="mt-2 text-sm text-gray-500">Our team is here to help.</p>
            <p class="mt-2 text-sm text-[#14183E]">
              <NuxtLink
                href="https://wa.me/+12066362456"
                target="_blank"
                rel="external"
                >Start new chat
              </NuxtLink>
            </p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-[#14183E] rounded-full bg-blue-100/80"
            >
              <IconMarker />
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">Location</h2>
            <p class="mt-2 text-sm text-gray-500">
              We offer our services throughout <br />
              the state of Florida (USA)
            </p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-[#14183E] rounded-full bg-blue-100/80"
            >
              <IconContact />
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">Our phones</h2>
            <p class="mt-2 text-sm text-[#14183E]">(206) 636-2456 &nbsp</p>
            <p class="mt-2 text-sm text-[#14183E]">(786) 634-8023 &nbsp</p>
          </div>
        </div>

        <div class="p-4 py-6 rounded-lg bg-gray-50">
          <form @submit="sendEmail">
            <div class="-mx-2 md:items-center md:flex">
              <div class="flex-1 px-2">
                <label class="block mb-2 text-sm text-gray-600"
                  >First Name</label
                >
                <input
                  type="text"
                  placeholder="John"
                  required
                  v-model="form.name"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="flex-1 px-2 mt-4 md:mt-0">
                <label class="block mb-2 text-sm text-gray-600"
                  >Last Name</label
                >
                <input
                  type="text"
                  placeholder="Doe"
                  required
                  v-model="form.lastName"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div class="-mx-2 md:items-center md:flex mt-2">
              <div class="flex-1 px-2">
                <label class="block mb-2 text-sm text-gray-600"
                  >Contact phone</label
                >
                <input
                  type="tel"
                  placeholder="+1 1234567890"
                  required
                  v-model="form.phone"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="flex-1 px-2 mt-4 md:mt-0">
                <label class="block mb-2 text-sm text-gray-600">Address</label>
                <input
                  type="text"
                  placeholder="Miami, Florida"
                  required
                  v-model="form.address"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div class="w-full mt-4">
              <label class="block mb-2 text-sm text-gray-600">Message</label>
              <textarea
                class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
                required
                v-model="form.message"
              ></textarea>
            </div>

            <button
              class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#14183E] rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
