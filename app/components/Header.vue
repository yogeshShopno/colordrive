<script setup>
//add javascript of this template only
</script>
<template>
  <!-- header start -->
   
  <section id="header" class="px-auto px-4 ">
    <div class="container mx-auto flex justify-between items-center py-3">
      <div class="w-6/12 sm:w-6/12 lg:w-2/12 xl:w-2/12 w-3/12">
        <a href="/landing1" class="flex items-center">
          <img
            src="assets/images/logo.webp"
            class="mr-3 logo"
            alt="Logo"
            width="85%"
          />
        </a>
      </div>
      <div class="lg:w-6/12 xl:w-6/12">
        <div
          class="menu hidden items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="hidden md:flex space-x-6">
            <li class="flex relative group">
              <a href="" class="mr-1">Services</a>
              <i class="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <!-- Submenu starts -->
              <ul
                class="rounded-2xl absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
              >
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Interior Painting</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="/single-service">Exterior Painting</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="/services">Wall Design Painting</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Waterproofing Solutions</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Rental Painting</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Fasle Ceiling Designs</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">House Wallpaper</a>
                </li>
              </ul>
              <!-- Submenu ends -->
            </li>
            <li><a href="/blog">Recent Projects</a></li>
            <li><a href="/404">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
       

          </ul>
        </div>
      </div>
      <div class="w-6/12 sm:w-6/12 lg:w-4/12 xl:w-4/12 w-9/12">
        <div
          class="flex items-center lg:order-2 justify-end sm:justify-start lg:justify-end gap-x-3 me-3 sm:me-0"
        >
        <button
            type="button"
            class="m-0 text-white rounded-lg px-2 sm:px-5 py-2.5 btn-gray hidden sm:block"
          >
          <a href="/calculatePrice">
            Calculate Pricing</a>
          </button>
        
          <!-- <button
            type="button"
            class="m-0 text-white rounded-lg px-2 sm:px-5 py-2.5 btn-gray hidden sm:block"
          >
          <a href="/calculator">
            Calculate Pricing</a>
          </button> -->
         
          <button
          
            type="button"
            onclick="toggleModal1()"
            class="m-0 rounded-lg px-2 sm:px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
          >
            <span relative="relative z-10">Book Enquiry</span>
          </button>
        </div>
      </div>
      <!-- Mobile menu icon -->
      <button id="mobile-icon" class="lg:hidden">
        <i onclick="changeIcon(this)" class="fa-solid fa-bars"></i>
      </button>
      
    </div>

    <!-- Mobile menu -->
    <div class="lg:hidden flex justify-center w-full " id="mb">
      <div id="mobile-menu1" class="mobile-menu absolute top-23 w-full">
        <div class="bg-lightpink shadow-lg leading-9 font-bold h-screen z-2000  relative justify-between flex flex-col">
          <ul
          class=""
        >
          <li class="border-b-2 border-white hover:text-white">
            <a href="#" class="block pl-11"
              >Services <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i
            ></a>

            <!-- Submenu starts -->
            <ul class="bg-white text-gray-800 w-full">
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="#">Interior Painting</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="/single-service"
                  >Exterior Painting</a
                >
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="/services">Wall Design Painting</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="#">Waterproofing Solutions</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="#">Rental Painting</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="#">Fasle Ceiling Designs</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black">
                <a class="block pl-16" href="#">House Wallpaper</a>
              </li>
            </ul>
            <!-- Submenu ends -->
          </li>
          <li class="border-b-2 border-white hover:text-white pl-4">
            <a href="/blog" class="block pl-7">Recent Projects</a>
          </li>
          <li class="border-b-2 border-white hover:text-white pl-4">
            <a href="/404" class="block pl-7">About</a>
          </li>
          <li class="border-b-2 border-white hover:text-white pl-4">
            <a href="/contact-us" class="block pl-7">Contact Us</a>
          </li>
          
         
        </ul>
        <div class="side-bgimg">

</div>
        </div>
      


      </div>
    </div>
  </section>
  <!-- header end -->
  
</template>

<style scoped>
/* Header styles */
</style>
