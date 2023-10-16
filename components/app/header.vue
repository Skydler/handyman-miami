<template>
  <div>
    <div class="bg-gray-50">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xlhover:text-blue-400"
          >
            <div class="flex">
              <img
                class="h-10 w-10 lg:h-20 lg:w-20"
                src="/resources/Handyman.png"
                alt="Handyman Team Logo"
              />
              <h4 class="ms-2 lg:mt-5">Handyman Team by A&R</h4>
            </div>
          </router-link>

          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-20 md:mt-0"
        >
          <NuxtLink to="/" class="text-xl text-gray-800 hover:text-blue-400">
            Home
          </NuxtLink>
          <NuxtLink to="#" class="text-xl text-gray-800 hover:text-blue-400">
            About Us
          </NuxtLink>
          <NuxtLink to="#" class="text-xl text-gray-800 hover:text-blue-400">
            Pricing
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-xl text-gray-800 hover:text-blue-400"
          >
            Contact Us
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
