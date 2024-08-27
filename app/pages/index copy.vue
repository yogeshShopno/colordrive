<script setup>
</script>
<template>
  <div>
  <NuxtLayout>
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

  <!-- header start -->
  <section id="header" class="px-auto px-4">
    <div class="container mx-auto flex justify-between items-center py-3">
      <div class="xs-6-width md:w-6/12 lg:w-2/12 xl:w-2/12 w-3/12">
        <a href="#" class="flex items-center">
          <img src="assets/images/logo.webp" class="mr-3 logo" alt="Logo" width="85%" />
        </a>
      </div>
      <div class="lg:w-6/12 xl:w-6/12">
        <div class="menu hidden items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="hidden md:flex space-x-6">
            <li class="flex relative group">
              <a href="#" class="mr-1">Services</a>
              <i class="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <!-- Submenu starts -->
              <ul
                class="rounded-2xl absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Interior Painting</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Exterior Painting</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Wall Design Painting</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Waterproofing Solutions</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Rental Painting</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Fasle Ceiling Designs</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">House Wallpaper</a></li>
              </ul>

              <!-- Submenu ends -->
            </li>
            <li><a href="#">Recent Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="xs-4-width md:w-6/12 lg:w-4/12 xl:w-4/12 w-9/12">
        <div class="flex items-center lg:order-2 justify-start lg:justify-end gap-x-3">
          <button type="button" class="m-0 text-white rounded-lg px-2 sm:px-5 py-2.5 btn-gray">Calculate
            Pricing
          </button>
          <button
            class="m-0 rounded-lg px-2 sm:px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
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
    <div class="lg:hidden flex justify-center mt-3 w-full" id="mb">
      <div id="mobile-menu" class="mobile-menu absolute top-23 w-full"> <!-- add hidden here later -->
        <ul class="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
         
          <li class="border-b-2 border-white hover:text-white">
            <a href="#" class="block pl-11">Services <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i></a>

            <!-- Submenu starts -->
            <ul class="bg-white text-gray-800 w-full">
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Interior Painting</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Exterior Painting</a></li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Wall Design Painting</a>
              </li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Waterproofing Solutions</a></li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Rental Painting</a></li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">Fasle Ceiling Designs</a></li>
              <li class="text-sm leading-8 font-normal text-black"><a class="block pl-16" href="#">House Wallpaper</a></li>
            </ul>
            <!-- Submenu ends -->
          </li>
          <li class="border-b-2 border-white  hover:text-white pl-4"><a href="#"
              class="block pl-7">Recent Projects</a></li>
          <li class="border-b-2 border-white hover:text-white pl-4"><a href="#"
              class="block pl-7">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </section>
  <!-- header end -->

  <!-- slider start -->
  <section id="main-hero" class="px-4">
    <div class="container flex flex-col lg:flex-row mx-auto items-end">
      <div class="w-full lg:w-7/12 xl:w-7/12 py-100">
        <div class="border p-5 border-black rounded-2xl">
          <h3>What are you looking for?</h3>
          <div class="mt-4">
            <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-4 ">
              <div>
                <div
                  class="box1 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                </div>
                <h5 class="text-center mt-2"> Interior Painting </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <img src="assets/images/Exterior Painting.svg">
                </div>
                <h5 class="text-center mt-2"> Exterior Painting </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <img src="assets/images/Wall Design Painting.svg">
                </div>
                <h5 class="text-center mt-2"> Wall Design Painting </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <img src="assets/images/Waterproofing Solutions.svg">
                </div>
                <h5 class="text-center mt-2"> Waterproofing Solutions </h5>
              </div>
            </div>
            <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-4 mt-5">
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <img src="assets/images/Rental Painting.svg">
                </div>
                <h5 class="text-center mt-2"> Fasle Ceiling Designs </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <img src="assets/images/Fasle Ceiling Designs.svg">
                </div>
                <h5 class="text-center mt-2"> House Wallpaper </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-200">
                  <img src="assets/images/House Wallpaper.svg">
                </div>
                <h5 class="text-center mt-2"> Fasle Ceiling Designs </h5>
              </div>
              <div>
                <div
                  class="box2 justify-center flex rounded-2xl py-3 items-center  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                  <h5 class="text-center"> More Services</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 text-center sm:text-start">
          <h2>Looking For </h2>
          <h1 class="font-bold">Home Renovation</h1>
        </div>
        <div class="mt-4">
          <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 ">
            <div class="flex items-center">
              <img src="assets/images/google.svg" alt="google">
              <div class="ms-3">
                <h4> 4.8 </h4>
                <p> Google Rating </p>
              </div>
            </div>
            <div class="flex items-center">
              <img src="assets/images/warranty.svg" alt="google">
              <div class="ms-3">
                <h4> 2 Year </h4>
                <p> Warranty </p>
              </div>
            </div>
            <div class="flex items-center">
              <img src="assets/images/home_nicely_painted.svg" alt="google">
              <div class="ms-3">
                <h4> 1 Lakh </h4>
                <p> Homes Nicely Painted </p>
              </div>
            </div>


          </div>
        </div>

      </div>
      <div class="w-full lg:w-5/12 xl:w-5/12 justify-center flex relative mt-6 lg:mt-0">
        <div class="absolute" id="inquire">
          <h1>ENQUIRE NOW</h1>
        </div>
        <div class="p-5 bg-white rounded-tlb lg:w-10/12  xl:w-8/12 ">
          <h6 class="font-semibold text-xl">Create your dream home with our painting experts</h6>
          <p class="my-3 text-gray-200 text-sm">Fill the form below to book a free site evaluation by a Beautiful Homes
            Painting Service expert.</p>
          <div>
            <form>
              <div class="sm:flex sm:flex-wrap ">
                <div class="mb-5 sm:w-1/2 px-1">
                  <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name</label>
                  <input type="text" id="fname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name" required />
                </div>
                <div class="mb-5 sm:w-1/2 px-1">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email</label>
                  <input type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email" required />
                </div>
                <div class="mb-5 w-full">
                  <label for="phone-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                  <input type="text" id="phone-input" aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Mobile" required />

                </div>
                <div class="mb-5 w-full">
                  <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    City</label>
                  <select id="default"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select City</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div class="mb-5 w-full">
                  <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service
                    customer </label>
                  <select id="default"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a Services </option>
                    <option value="US">Interior Painting</option>
                    <option value="CA">Exterior Painting</option>
                    <option value="FR">Wall Design Painting</option>
                    <option value="DE">Waterproofing Solutions</option>
                    <option value="DE">Rental Painting</option>
                    <option value="DE">Fasle Ceiling Designs</option>
                    <option value="DE">House Wallpaper</option>
                  </select>
                </div>
              </div>
              <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">T&C and Privacy
                  Policy</label>
              </div>
              <button type="submit"
                class="text-white main-btn font-medium 
                rounded-lg text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                <span relative="relative z-10">Book Enquiry</span></button>


            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- slider end -->


<!-- <HomeTestimonials/> -->





  <!-- Testimonials start -->
  <section id="testimonials " class="py-100 px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> Testimonials </h2>
      <div>
        <div class="testimonials owl-carousel owl-theme flex justify-between">
          <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review1.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
          <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review2.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
          <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review3.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Testimonials end -->

  <!-- Quick links start -->
  <section class="px-4" id="quick-link">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> Quick links </h2>
      <div class="grid gap-x-8 gap-y-4  sm:grid-cols-2 md:grid-cols-3 ">
        <div class="flex items-center bg-light rounded-2xl">
          <img src="assets/images/Calculate Price.webp" alt="Calculate Price" class="br-2xl">
          <div class="ms-3">
            <h4>Calculate Price </h4>
            <!-- <p> Google Rating </p> -->
          </div>
        </div>
        <div class="flex items-center bg-light rounded-2xl">
          <img src="assets/images/Colour Consultancy.webp" alt="Calculate Price" class="br-2xl">
          <div class="ms-3">
            <h4>Colour Consultancy </h4>
            <!-- <p> Google Rating </p> -->
          </div>
        </div>
        <div class="flex items-center bg-light rounded-2xl">
          <img src="assets/images/Explore design ideas.webp" alt="Calculate Price" class="br-2xl">
          <div class="ms-3">
            <h4>Explore design ideas </h4>
            <!-- <p> Google Rating </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Quick links end -->

  <!-- Inspirational Gallery start -->
  <section class="py-100 px-4" id="gallery">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> Inspirational Gallery </h2>
      <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-4 ">
        <div class="relative">
          <img src="assets/images/gallery1.webp" alt="gallery1" class="gallery-img" width="100%">
          <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Wall Texture Gallery </h4>
          </div>
        </div>
        <div class="relative">
          <img src="assets/images/gallery2.webp" alt="gallery1" class="gallery-img" width="100%">
          <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Stencil Designs
            </h4>
          </div>
        </div>
        <div class="relative">
          <img src="assets/images/gallery3.webp" alt="gallery1" class="gallery-img" width="100%">
          <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Interior Painting</h4>
          </div>
        </div>
        <div class="relative">
          <img src="assets/images/gallery4.webp" alt="gallery1" class="gallery-img" width="100%">
          <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Exterior Painting </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Inspirational Gallery end -->

  <!-- How We Work Start -->
  <section id="work" class="px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> How We Work? </h2>
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 ">
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work1.svg" alt="gallery1" class="work1">
            <img src="assets/images/arrow.svg" alt="arrow" class="arrow">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Booking </h4>
          </div>
        </div>
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work2.svg" alt="gallery1" class="work1">
            <img src="assets/images/arrow.svg" alt="arrow" class="arrow arrow2">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Mesurement </h4>
          </div>
        </div>
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work3.svg" alt="gallery1" class="work1">
            <img src="assets/images/arrow.svg" alt="arrow" class="arrow d-none">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Product Selection </h4>
          </div>
        </div>
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work4.svg" alt="gallery1" class="work1">
            <img src="assets/images/arrow.svg" alt="arrow" class="arrow arrow4">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Cost Estimation </h4>
          </div>
        </div>
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work5.svg" alt="gallery1" class="work1">
            <img src="assets/images/arrow.svg" alt="arrow" class="arrow">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Work Completion </h4>
          </div>
        </div>
        <div>
          <div class="flex justify-center relative">
            <img src="assets/images/work6.svg" alt="gallery1" class="work1">
          </div>
          <div class="pt-3 w-full text-center text-xl">
            <h4> Customer Satisfaction </h4>
          </div>
        </div>


      </div>
    </div>
  </section>
  <!-- How We Work end -->

  <!-- Colour Drive Assurance Shields start -->
  <section id="assurance" class="py-100 px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> Colour Drive Assurance Shields </h2>
      <div class="grid gap-x-8 gap-y-4  sm:grid-cols-2 md:grid-cols-3">
        <div class="relative">
          <img src="assets/images/assurance1.webp" alt="assurance1" class="assurance-img">
          <div class="bg-assurance p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Before Painting and After Painting </h4>
          </div>
        </div>
        <div class="relative">
          <img src="assets/images/assurance2.webp" alt="assurance1" class="assurance-img">
          <div class="bg-assurance p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Before Waterproofing and After Waterproofing
            </h4>
          </div>
        </div>
        <div class="relative">
          <img src="assets/images/assurance3.webp" alt="assurance1" class="assurance-img">
          <div class="bg-assurance p-2 lg:p-4 absolute w-full text-center text-white text-xl">
            <h4>Before Normal Painting and After Design Painting on one wall</h4>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- Colour Drive Assurance Shields  end-->

  <!-- Home Design Inspiration Gallery -->
  <section id="inspiration-img" class="px-4">
    <div class="container mx-auto relative">
      <div class="absolute design-inspiration gallery-design">
        <h2 class="text-center font-bold"> Home Design Inspiration Gallery </h2>
        <p class="text-center mb-4">Give your home a new look with these interior design ideas curated for you</p>
      </div>

      <div class="flex items-center gap-4 gallery-design">
        <div class="w-5/12 ">
          <div class="flex items-end gap-4 mb-4">
            <div class="w-5/12 relative">
              <img src="assets/images/inspiration1.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Master Room </h6>
              </div>
            </div>
            <div class="w-7/12 relative">
              <img src="assets/images/inspiration2.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Living Room </h6>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-7/12 relative">
              <img src="assets/images/inspiration6.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Home By Livspace </h6>
              </div>
            </div>
            <div class="w-5/12 relative">
              <img src="assets/images/inspiration7.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn1 px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Kitchen</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/12 relative">
          <img src="assets/images/inspiration3.webp" alt="Inspiration" class="inspiration">
          <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
            <h6>False Ceiling</h6>
          </div>
        </div>
        <div class="w-5/12">
          <div class="flex items-end gap-4 mb-4">
            <div class="w-7/12 relative">
              <img src="assets/images/inspiration4.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Kids Room </h6>
              </div>
            </div>
            <div class="w-5/12 relative">
              <img src="assets/images/inspiration5.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Home Office</h6>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-5/12 relative">
              <img src="assets/images/inspiration8.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Wardrobe</h6>
              </div>
            </div>
            <div class="w-7/12 relative">
              <img src="assets/images/inspiration9.webp" alt="Inspiration" class="inspiration">
              <div class="inspiration-btn2 px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
                <h6>Dining Room</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-design-block">
        <div>
          <h2 class="text-center font-bold"> Home Design Inspiration Gallery </h2>
          <p class="text-center mb-4">Give your home a new look with these interior design ideas curated for you</p>
        </div>

        <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 items-center">
          <div class="relative">
            <img src="assets/images/res-gallery.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Dining Room </h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-gallery2.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Wardrobe </h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-galler3.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Kitchen </h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-galler4.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Home By Livspace</h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-galler5.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Kids Room</h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-gallery6.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>False Ceiling</h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-gallery7.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Living Room</h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-galler8.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Master Room </h6>
            </div>
          </div>
          <div class="relative">
            <img src="assets/images/res-gallery9.webp" class="rounded-2xl">
            <div class="inspiration-btn px-4 py-1 xl:py-2 absolute text-center text-white text-xl">
              <h6>Home Office</h6>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  <!-- Home Design Inspiration Gallery -->

  <!-- CTA start -->
  <section class="py-100 px-4">
    <div class="container mx-auto" id="cta-bg">
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column">
        <div>
          <img src="assets/images/ctag-img.webp" alt="cta" class="hidden lg:block">
          <img src="assets/images/cta-mob.webp" alt="cta" class="block lg:hidden rounded-2xl">
        </div>
        <div class="text-center md:text-start">
          <h5 class="text-white">Unable To Decide Upon a Colour?</h5>
          <h2 class="text-white font-semibold">Get Quotation (Calculate Price) </h2>
          <h4>Self serve</h4>
          <button type="submit"
            class="mb-4 xl:mb-0 mt-4 text-black bg-white cta-btn font-medium 
                  rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
            <span relative="relative z-10">Estimate Cost</span></button>
        </div>
      </div>

    </div>
  </section>
  <!-- CTA start -->

  <!--Video Testimonials start -->
  <section id="video-testimonials" class="px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-4"> Video Testimonials </h2>
      <div>
        <div class="video-testimonials owl-carousel owl-theme flex justify-between">
          <div class="item m-4 ">
            <div class="bg-white p-5 video-box rounded-2xl">
              <img src="assets/images/video1.webp" alt="video-box" class="rounded-2xl">
              <div class="mt-4">
                <div class="flex items-center">
                  <img src="assets/images/user-img.webp" alt="user" class="w-22">
                  <div class="ms-3">
                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                    <p>@staking</p>
                  </div>
                </div>
                <p class="text-xl text-black mt-3">Faucibus eu condimentum maecenas sollicitudin vitae.</p>
              </div>
            </div>
          </div>
          <div class="item m-4 ">
            <div class="bg-white p-5 video-box rounded-2xl">
              <img src="assets/images/video1.webp" alt="video-box" class="rounded-2xl">
              <div class="mt-4">
                <div class="flex items-center">
                  <img src="assets/images/user-img.webp" alt="user" class="w-22">
                  <div class="ms-3">
                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                    <p>@staking</p>
                  </div>
                </div>
                <p class="text-xl text-black mt-3">Faucibus eu condimentum maecenas sollicitudin vitae.</p>
              </div>
            </div>
          </div>
          <div class="item m-4 ">
            <div class="bg-white p-5 video-box rounded-2xl">
              <img src="assets/images/video1.webp" alt="video-box" class="rounded-2xl">
              <div class="mt-4">
                <div class="flex items-center">
                  <img src="assets/images/user-img.webp" alt="user" class="w-22">
                  <div class="ms-3">
                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                    <p>@staking</p>
                  </div>
                </div>
                <p class="text-xl text-black mt-3">Faucibus eu condimentum maecenas sollicitudin vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Video Testimonials end -->

  <!-- Why You should choose CD -->
  <section class="py-100 px-4" id="cd">
    <div class="container mx-auto">
      <div class="flex gap-4 mb-4 flex-col md:flex-row">
        <div class="w-full lg:w-4/12 xl:w-6/12 shadow1 p-6">
          <h2 class="font-semibold">Why You should choose CD
          </h2>
          <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen.</p>
          <button
            class="m-0 rounded-lg px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
            <span relative="relative z-10">Book Series</span>
          </button>
        </div>
        <div class="w-full lg:w-4/12 xl:w-3/12 shadow1 p-6">
          <img src="assets/images/cd1.svg" alt="cd">
          <h5 class="my-3 text-xl font-semibold">Get 8000+ Colour Shades Suggestions</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        </div>
        <div class="w-full lg:w-4/12 xl:w-3/12 shadow1 p-6">
          <img src="assets/images/cd2.svg" alt="cd">
          <h5 class="my-3 text-xl font-semibold">Home Wall Design Painting Ideas</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        </div>
      </div>
      <div class="flex gap-4 flex-col md:flex-row">
        <div class="w-full lg:w-4/12 xl:w-4/12 shadow1 p-6">
          <img src="assets/images/cd3.svg" alt="cd">
          <h5 class="my-3 text-xl font-semibold">ColourDrive Painters Vs Local Painters</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.</p>

        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 shadow1 p-6">
          <img src="assets/images/cd4.svg" alt="cd">
          <h5 class="my-3 text-xl font-semibold">Home Wall Design Painting Ideas</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.</p>

        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 shadow1 p-6">
          <img src="assets/images/cd5.svg" alt="cd">
          <h5 class="my-3 text-xl font-semibold">Get 8000+ Colour Shades Suggestions</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.</p>

        </div>
      </div>


    </div>
  </section>
  <!-- Why You should choose CD -->

  <!-- Suppliers brand -->
  <section class="px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-5"> Suppliers brand </h2>
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-4">
        <img src="assets/images/brand1.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand2.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand3.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand4.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand5.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand6.webp" alt="brand" class="rounded-2xl shadow11">
      </div>
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
        <img src="assets/images/brand7.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand8.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand9.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand10.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand11.webp" alt="brand" class="rounded-2xl shadow11">
        <img src="assets/images/brand12.webp" alt="brand" class="rounded-2xl shadow11">
      </div>
      </div>
  </section>
  <!-- Suppliers brand -->

  <!-- blog -->
  <section id="blog" class="py-100 px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-5"> Recent Projects </h2>
      <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <div class="blog-box rounded-2xl">
          <div class="relative">
            <img src="assets/images/blog1.webp" width="100%" alt="Blog" class="blog">
            <div class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.6 1.99272H12.8V1.21999C12.8 0.756357 12.48 0.447266 12 0.447266C11.52 0.447266 11.2 0.756357 11.2 1.21999V1.99272H4.8V1.21999C4.8 0.756357 4.48 0.447266 4 0.447266C3.52 0.447266 3.2 0.756357 3.2 1.21999V1.99272H2.4C1.04 1.99272 0 2.99727 0 4.3109V15.1291C0 16.4427 1.04 17.4473 2.4 17.4473H13.6C14.96 17.4473 16 16.4427 16 15.1291V4.3109C16 3.07454 14.96 1.99272 13.6 1.99272ZM4 14.3564C3.52 14.3564 3.2 14.0473 3.2 13.5836C3.2 13.12 3.52 12.8109 4 12.8109C4.48 12.8109 4.8 13.12 4.8 13.5836C4.8 14.0473 4.48 14.3564 4 14.3564ZM4 11.2654C3.52 11.2654 3.2 10.9564 3.2 10.4927C3.2 10.0291 3.52 9.71999 4 9.71999C4.48 9.71999 4.8 10.0291 4.8 10.4927C4.8 10.9564 4.48 11.2654 4 11.2654ZM8 14.3564C7.52 14.3564 7.2 14.0473 7.2 13.5836C7.2 13.12 7.52 12.8109 8 12.8109C8.48 12.8109 8.8 13.12 8.8 13.5836C8.8 14.0473 8.48 14.3564 8 14.3564ZM8 11.2654C7.52 11.2654 7.2 10.9564 7.2 10.4927C7.2 10.0291 7.52 9.71999 8 9.71999C8.48 9.71999 8.8 10.0291 8.8 10.4927C8.8 10.9564 8.48 11.2654 8 11.2654ZM12 14.3564C11.52 14.3564 11.2 14.0473 11.2 13.5836C11.2 13.12 11.52 12.8109 12 12.8109C12.48 12.8109 12.8 13.12 12.8 13.5836C12.8 14.0473 12.48 14.3564 12 14.3564ZM12 11.2654C11.52 11.2654 11.2 10.9564 11.2 10.4927C11.2 10.0291 11.52 9.71999 12 9.71999C12.48 9.71999 12.8 10.0291 12.8 10.4927C12.8 10.9564 12.48 11.2654 12 11.2654ZM14.4 6.62908H1.6V4.3109C1.6 3.84727 1.92 3.53817 2.4 3.53817H3.2V4.3109C3.2 4.77454 3.52 5.08363 4 5.08363C4.48 5.08363 4.8 4.77454 4.8 4.3109V3.53817H11.2V4.3109C11.2 4.77454 11.52 5.08363 12 5.08363C12.48 5.08363 12.8 4.77454 12.8 4.3109V3.53817H13.6C14.08 3.53817 14.4 3.84727 14.4 4.3109V6.62908Z"
                  fill="white" />
              </svg>
              <h6 class="ms-3 ">Feb 20, 2024 </h6>
            </div>
          </div>
          <div class="p-4">
            <ul class="m-0 p-0">
              <li class="flex items-center">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                    fill="#6A6D70" />
                </svg>
                <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
              </li>
              <li class="flex items-center">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                    fill="#6A6D70" />
                </svg>

                <h5 class="ms-3">Bangalore</h5>
              </li>
            </ul>
          </div>
        </div>
        <div class="blog-box rounded-2xl">
          <div class="relative">
            <img src="assets/images/blog2.webp" width="100%" alt="Blog" class="blog">
            <div class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.6 1.99272H12.8V1.21999C12.8 0.756357 12.48 0.447266 12 0.447266C11.52 0.447266 11.2 0.756357 11.2 1.21999V1.99272H4.8V1.21999C4.8 0.756357 4.48 0.447266 4 0.447266C3.52 0.447266 3.2 0.756357 3.2 1.21999V1.99272H2.4C1.04 1.99272 0 2.99727 0 4.3109V15.1291C0 16.4427 1.04 17.4473 2.4 17.4473H13.6C14.96 17.4473 16 16.4427 16 15.1291V4.3109C16 3.07454 14.96 1.99272 13.6 1.99272ZM4 14.3564C3.52 14.3564 3.2 14.0473 3.2 13.5836C3.2 13.12 3.52 12.8109 4 12.8109C4.48 12.8109 4.8 13.12 4.8 13.5836C4.8 14.0473 4.48 14.3564 4 14.3564ZM4 11.2654C3.52 11.2654 3.2 10.9564 3.2 10.4927C3.2 10.0291 3.52 9.71999 4 9.71999C4.48 9.71999 4.8 10.0291 4.8 10.4927C4.8 10.9564 4.48 11.2654 4 11.2654ZM8 14.3564C7.52 14.3564 7.2 14.0473 7.2 13.5836C7.2 13.12 7.52 12.8109 8 12.8109C8.48 12.8109 8.8 13.12 8.8 13.5836C8.8 14.0473 8.48 14.3564 8 14.3564ZM8 11.2654C7.52 11.2654 7.2 10.9564 7.2 10.4927C7.2 10.0291 7.52 9.71999 8 9.71999C8.48 9.71999 8.8 10.0291 8.8 10.4927C8.8 10.9564 8.48 11.2654 8 11.2654ZM12 14.3564C11.52 14.3564 11.2 14.0473 11.2 13.5836C11.2 13.12 11.52 12.8109 12 12.8109C12.48 12.8109 12.8 13.12 12.8 13.5836C12.8 14.0473 12.48 14.3564 12 14.3564ZM12 11.2654C11.52 11.2654 11.2 10.9564 11.2 10.4927C11.2 10.0291 11.52 9.71999 12 9.71999C12.48 9.71999 12.8 10.0291 12.8 10.4927C12.8 10.9564 12.48 11.2654 12 11.2654ZM14.4 6.62908H1.6V4.3109C1.6 3.84727 1.92 3.53817 2.4 3.53817H3.2V4.3109C3.2 4.77454 3.52 5.08363 4 5.08363C4.48 5.08363 4.8 4.77454 4.8 4.3109V3.53817H11.2V4.3109C11.2 4.77454 11.52 5.08363 12 5.08363C12.48 5.08363 12.8 4.77454 12.8 4.3109V3.53817H13.6C14.08 3.53817 14.4 3.84727 14.4 4.3109V6.62908Z"
                  fill="white" />
              </svg>
              <h6 class="ms-3 ">Feb 20, 2024 </h6>
            </div>
          </div>
          <div class="p-4">
            <ul class="m-0 p-0">
              <li class="flex items-center">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                    fill="#6A6D70" />
                </svg>
                <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
              </li>
              <li class="flex items-center">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                    fill="#6A6D70" />
                </svg>

                <h5 class="ms-3">Bangalore</h5>
              </li>
            </ul>
          </div>
        </div>
        <div class="blog-box rounded-2xl">
          <div class="relative">
            <img src="assets/images/blog3.webp" width="100%" alt="Blog" class="blog">
            <div class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.6 1.99272H12.8V1.21999C12.8 0.756357 12.48 0.447266 12 0.447266C11.52 0.447266 11.2 0.756357 11.2 1.21999V1.99272H4.8V1.21999C4.8 0.756357 4.48 0.447266 4 0.447266C3.52 0.447266 3.2 0.756357 3.2 1.21999V1.99272H2.4C1.04 1.99272 0 2.99727 0 4.3109V15.1291C0 16.4427 1.04 17.4473 2.4 17.4473H13.6C14.96 17.4473 16 16.4427 16 15.1291V4.3109C16 3.07454 14.96 1.99272 13.6 1.99272ZM4 14.3564C3.52 14.3564 3.2 14.0473 3.2 13.5836C3.2 13.12 3.52 12.8109 4 12.8109C4.48 12.8109 4.8 13.12 4.8 13.5836C4.8 14.0473 4.48 14.3564 4 14.3564ZM4 11.2654C3.52 11.2654 3.2 10.9564 3.2 10.4927C3.2 10.0291 3.52 9.71999 4 9.71999C4.48 9.71999 4.8 10.0291 4.8 10.4927C4.8 10.9564 4.48 11.2654 4 11.2654ZM8 14.3564C7.52 14.3564 7.2 14.0473 7.2 13.5836C7.2 13.12 7.52 12.8109 8 12.8109C8.48 12.8109 8.8 13.12 8.8 13.5836C8.8 14.0473 8.48 14.3564 8 14.3564ZM8 11.2654C7.52 11.2654 7.2 10.9564 7.2 10.4927C7.2 10.0291 7.52 9.71999 8 9.71999C8.48 9.71999 8.8 10.0291 8.8 10.4927C8.8 10.9564 8.48 11.2654 8 11.2654ZM12 14.3564C11.52 14.3564 11.2 14.0473 11.2 13.5836C11.2 13.12 11.52 12.8109 12 12.8109C12.48 12.8109 12.8 13.12 12.8 13.5836C12.8 14.0473 12.48 14.3564 12 14.3564ZM12 11.2654C11.52 11.2654 11.2 10.9564 11.2 10.4927C11.2 10.0291 11.52 9.71999 12 9.71999C12.48 9.71999 12.8 10.0291 12.8 10.4927C12.8 10.9564 12.48 11.2654 12 11.2654ZM14.4 6.62908H1.6V4.3109C1.6 3.84727 1.92 3.53817 2.4 3.53817H3.2V4.3109C3.2 4.77454 3.52 5.08363 4 5.08363C4.48 5.08363 4.8 4.77454 4.8 4.3109V3.53817H11.2V4.3109C11.2 4.77454 11.52 5.08363 12 5.08363C12.48 5.08363 12.8 4.77454 12.8 4.3109V3.53817H13.6C14.08 3.53817 14.4 3.84727 14.4 4.3109V6.62908Z"
                  fill="white" />
              </svg>
              <h6 class="ms-3 ">Feb 20, 2024 </h6>
            </div>
          </div>
          <div class="p-4">
            <ul class="m-0 p-0">
              <li class="flex items-center">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                    fill="#6A6D70" />
                </svg>
                <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
              </li>
              <li class="flex items-center">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                    fill="#6A6D70" />
                </svg>

                <h5 class="ms-3">Bangalore</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog -->

  <!-- faq -->
  <section id="faq" class="px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-5"> FAQs </h2>
      <div class="accordion flex flex-col items-center justify-center ">
        <!--  Panel 1  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4 ">
          <input type="checkbox" name="panel" id="panel-1" class="hidden">
          <label for="panel-1" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes
            here</label>
          <div class="accordion__content overflow-hidden ">
            <p class="accordion__body p-4 text-black" id="panel1">Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
          </div>
        </div>
        <!--  Panel 2  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4 ">
          <input type="checkbox" name="panel" id="panel-2" class="hidden">
          <label for="panel-2" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes
            here</label>
          <div class="accordion__content overflow-hidden ">
            <p class="accordion__body p-4 text-black" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti
              fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <!--  Panel 3  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-3" class="hidden">
          <label for="panel-3" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes
            here</label>
          <div class="accordion__content overflow-hidden ">
            <p class="accordion__body p-4 text-black" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti
              fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <!--  Panel 4  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-4" class="hidden">
          <label for="panel-4" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes
            here</label>
          <div class="accordion__content overflow-hidden ">
            <p class="accordion__body p-4 text-black" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti
              fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <!--  Panel 5  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-5" class="hidden">
          <label for="panel-5" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes
            here</label>
          <div class="accordion__content overflow-hidden ">
            <p class="accordion__body p-4 text-black" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti
              fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- faq -->

  <!-- CTA start -->
  <section class="py-100 px-4">
    <div class="container mx-auto" id="cta-bg">
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column">
        <div>
          <img src="assets/images/cta2.webp" alt="cta" class="hidden xl:block">
          <img src="assets/images/res-cta.webp" alt="cta" class="block xl:hidden rounded-2xl">
        </div>
        <div class="text-center md:text-start">
          <h5 class="text-white">Unable To Decide Upon a Colour?</h5>
          <h2 class="text-white font-semibold">Request Home Painting Services ! </h2>
          <h4>Share details for Free Online-Quotation.</h4>
          <button type="submit"
            class="mb-4 xl:mb-0 mt-4 text-black bg-white cta-btn font-medium 
                    rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
            <span relative="relative z-10">Enquire Now</span></button>
        </div>
      </div>

    </div>
  </section>
  <!-- CTA start -->

  <!-- footer -->
  <section id="footer" class="px-4">
    <div class="container mx-auto py-100">
      <div class="flex text-white flex-wrap">
        <div class="w-full md:w-full lg:w-4/12 xl:w-4/12  mb-3 lg:mb-0">
          <div class="mb-4">
            <h1>LOREM</h1>
          </div>
          <div>
            <p class="w-75 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has
              been the
              industry's standard dummy.</p>
            <ul class="p-0 m-0">
              <li><a href="mailto: Lorem00@gmail.com">Lorem00@gmail.com</a></li>
              <li><a href="tel: +91 80005 54442">+91 80005 54442 </a></li>
            </ul>
          </div>
        </div>
        <div class="w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12 ">
          <h5 class="mb-4 font-medium">
            Infomation
          </h5>
          <ul>
            <li>Paints & Colours
            </li>
            <li>Services
            </li>
            <li>Waterproofing
            </li>
            <li>Inspiration
            </li>
            <li>Home Decor
            </li>
            <li>Shop
            </li>
          </ul>
        </div>
        <div class="w-6/12 md:w-5/12 lg:w-3/12 xl:w-3/12 ">
          <h5 class="mb-4 font-medium">
            Services
          </h5>
          <ul>
            <li>Expert Site Supervision
            </li>
            <li>Trained Professionals
            </li>
            <li>Dust Free Mechanised Painting
            </li>
            <li>Superior Finish
            </li>
            <li>Full Home Cleaning After Painting
            </li>
            <li>Asian Paints Warranty
            </li>
          </ul>
        </div>
        <div class="w-full md:w-4/12 lg:w-3/12 xl:w-3/12 ">
          <h5 class="mb-4 font-medium">
            Send Email
          </h5>
          <div class="mb-3">
            <form class="flex">
              <div class="sm:flex sm:flex-wrap w-75">
                <input type="email" id="email"
                  class="text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your email" required />
              </div>
              <button type="submit"
                class="w-25 text-white main-btn font-medium text-sm p-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                <span relative="relative z-10">Send</span></button>
            </form>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
        </div>
      </div>
    </div>
    <div class="container border-t py-3 mx-auto text-white">
      <div class="grid gap-x-8 gap-y-4  sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p>©LoremDesign2020.</p>
        </div>
        <div class="justify-start sm:justify-end lg:justify-start flex">
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
        <div>
          <ul class="flex gap-4 sm:justify-start lg:justify-end ">
            <li><svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.89177 5.61647H4.54448V4.10287C4.54448 3.53413 4.92761 3.40191 5.19746 3.40191C5.46669 3.40191 6.85401 3.40191 6.85401 3.40191V0.902984L4.57272 0.894531C2.04061 0.894531 1.46438 2.75831 1.46438 3.95102V5.61677H0V8.19177H1.46438C1.46438 11.4961 1.46438 15.4781 1.46438 15.4781H4.54448C4.54448 15.4781 4.54448 11.4572 4.54448 8.19177H6.62315L6.89177 5.61647Z"
                  fill="white" />
              </svg>
            </li>
            <li><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.04306 6.04297H0.597168V15.4794H4.04306V6.04297Z" fill="white" />
                <path
                  d="M2.32011 4.32597C3.27167 4.32597 4.04306 3.55782 4.04306 2.61025C4.04306 1.66269 3.27167 0.894531 2.32011 0.894531C1.36856 0.894531 0.597168 1.66269 0.597168 2.61025C0.597168 3.55782 1.36856 4.32597 2.32011 4.32597Z"
                  fill="white" />
                <path
                  d="M12.2276 5.39844C11.0517 5.40187 9.94129 5.93975 9.21249 6.86023V6.04183H5.7666V15.4783H9.21249V9.47327C9.21249 8.52619 9.98437 7.75755 10.9354 7.75755C11.8865 7.75755 12.6584 8.52619 12.6584 9.47327V15.4783H16.1043V9.25881C16.1043 7.12703 14.3684 5.39844 12.2276 5.39844Z"
                  fill="white" />
              </svg>
            </li>
            <li>
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3349 2.62047C17.6957 2.91365 17.0079 3.11141 16.2861 3.19991C17.023 2.74466 17.5881 2.02355 17.8545 1.16331C17.1653 1.58542 16.4022 1.89171 15.5894 2.05706C14.9386 1.34177 14.0114 0.894531 12.9858 0.894531C11.0161 0.894531 9.41904 2.54253 9.41904 4.5755C9.41904 4.86358 9.45045 5.14438 9.51151 5.41425C6.54721 5.26056 3.91819 3.79538 2.15881 1.56794C1.85176 2.11132 1.67635 2.74394 1.67635 3.4188C1.67635 4.69605 2.30563 5.82288 3.26279 6.48244C2.67868 6.46314 2.1281 6.29743 1.64741 6.02173C1.64705 6.03703 1.64705 6.05269 1.64705 6.06835C1.64705 7.85147 2.87633 9.33886 4.5083 9.67757C4.20901 9.76097 3.89384 9.80649 3.56843 9.80649C3.33867 9.80649 3.11491 9.78355 2.8975 9.74021C3.35138 11.2025 4.66889 12.267 6.22921 12.2965C5.00841 13.2839 3.47102 13.8724 1.79917 13.8724C1.51153 13.8724 1.22741 13.8549 0.948242 13.8207C2.52727 14.8656 4.40207 15.4745 6.41627 15.4745C12.9777 15.4745 16.5653 9.86586 16.5653 5.00161C16.5653 4.84209 16.5621 4.68293 16.5554 4.52451C17.2521 4.00734 17.857 3.3587 18.3349 2.62047Z"
                  fill="white" />
              </svg>
            </li>
            <li>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7512 0.894531H0.936798C0.430859 0.894531 0.0214844 1.30219 0.0214844 1.80601V14.5667C0.0214844 15.0705 0.430859 15.4781 0.936798 15.4781H13.7512C14.2571 15.4781 14.6665 15.0705 14.6665 14.5667V1.80601C14.6665 1.30219 14.2571 0.894531 13.7512 0.894531ZM5.51337 8.18634C5.51337 8.18634 5.65816 6.36339 7.344 6.36339C9.02983 6.36339 9.17462 8.18634 9.17462 8.18634C9.17462 8.18634 9.22737 10.0093 7.344 10.0093C5.46062 10.0093 5.51337 8.18634 5.51337 8.18634ZM12.8359 13.6552H1.85211V7.27486H3.68274H3.81231C3.73637 7.5677 3.68274 7.86946 3.68274 8.18634C3.68274 10.1998 5.32207 11.8322 7.344 11.8322C9.36592 11.8322 11.0053 10.1998 11.0053 8.18634C11.0053 7.86946 10.9516 7.5677 10.8756 7.27486H11.0053H12.8359V13.6552ZM12.8359 5.45191H10.0899V2.71748H12.8359V5.45191Z"
                  fill="white" />
              </svg>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
</NuxtLayout>
</div>
</template>
<style scoped>
/* Header specific styles */
</style>
