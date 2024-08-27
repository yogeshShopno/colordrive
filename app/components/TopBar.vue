<script setups>
// Add any script needed for this template only.
</script>
<template>
  <!-- topbar start -->
<section id="topbar" class="px-auto px-4">
  <div class="container mx-auto">
    <div class="flex items-center flex-col md:flex-row py-3 md:py-0">
      <div class="w-full md:w-5/12 lg:w-6/12 flex justify-center md:justify-start">
        <img src="assets/images/offer.webp" alt="logo" width="100%" class="offer-width">
      </div>
      <div class="w-full md:w-7/12 lg:w-6/12 flex gap-x-3 justify-center md:justify-end">
        <button type="button" class="m-0 text-white rounded-lg px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">Vendor
          Registration
        </button>
        <div>
          <ul class="hidden md:flex space-x-6">
            <button type="button"
              class="flex relative group m-0 text-white rounded-lg px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">Select City <i
                class="fa-solid fa-chevron-down fa-2xs pt-3 ps-2"></i>
              <!-- Submenu starts -->
              <ul
                class="z-10 absolute bg-white p-3 w-44 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-2xl text-black">
                <li><a href="#" class="text-sm hover:bg-slate-100 leading-8">United States</a></li>
                <li><a href="#" class="text-sm hover:bg-slate-100 leading-8">Canada</a></li>
                <li><a href="#" class="text-sm hover:bg-slate-100 leading-8">France</a></li>
                <li><a href="#" class="text-sm hover:bg-slate-100 leading-8">Germany</a></li>
              </ul>
            </button>
            <!-- Submenu ends -->
          </ul>
        </div>
        <img src="assets/images/login.svg" alt="user" width="30px">
        <button type="button"
          class="m-0 text-white font-medium rounded-lg text-sm px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">Login</button>
      </div>
    </div>
  </div>
</section>
<!-- topbar end -->
</template>
<style scoped>
/* Header styles */
</style>








