<script setup>
</script>

<template>
  <section class="error pb-200">
    <div class="container mx-auto">
      <div>
        <div class="justify-center flex">
          <img
            src="assets/images/404/404_1.webp"
            alt="404"
            width="100%"
            class="w-75"
          />
        </div>

        <div class="justify-center flex flex-col text-center">
          <h2 class="text-center font-semibold">OOPS!</h2>
          <h3 class="py-3">PAGE NOT FOUND</h3>
        </div>
      </div>
      <div class="flex justify-center gap-3">
        <a href="/home">
        <button
          class="m-0 rounded-lg px-2 sm:px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
        >
          <span relative="relative z-10">Go Home</span>
        </button></a>
        <button
          class="m-0 rounded-lg px-2 sm:px-5 py-2.5 bg-gray1 before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
        >
          <span relative="relative z-10">Book Enquiry</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '../assets/css/404.css';
</style>