<script setup>
</script>

<template>
<div>

    <!-- Add this to your HTML template -->
    <div id="booking-popup" class="px-2 md:px-0 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden ">
        <div class="bg-white p-4 rounded-lg md:w-7/12 xl:w-4/12 relative">
            <div>
                <button type="button" class="text-white mr-2 absolute btn-position close-btn z-50" onclick="toggleModal3()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="overflow">
                <h2>Enquire Now</h2>
                <h6 class="font-semibold text-xl">
                    Create your dream home with our painting experts
                </h6>
                <p class="my-3 text-gray text-sm">
                    Fill the form below to book a free site evaluation by a Beautiful
                    Homes Painting Service expert.
                </p> 
                <form id="enquiryForm">
                    <div class="sm:flex sm:flex-wrap">
                        <div class="mb-5 sm:w-1/2 px-1">
                            <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name</label>
                            <input type="text" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div class="mb-5 sm:w-1/2 px-1">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                        <div class="mb-5 w-full">
                            <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile" required />
                        </div>
                        <div class="mb-5 w-full">
                            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select City</label>
                            <select id="default" class="z-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select City</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div class="mb-5 w-full">
                            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service customer
                            </label>
                            <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a Services</option>
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
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">T&C and Privacy Policy</label>
                    </div>
                    <button type="submit" class="text-white main-btn font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                        <span relative="relative z-10">Book Enquiry</span>
                    </button>
                </form>
                <!-- Success and error messages -->
                <div id="message3" class="mt-4 hidden text-center"></div>
            </div>
        </div>
    </div>

    <!-- slider start -->
    <section id="home" class="px-4 py-100">
        <div class="container flex flex-col lg:flex-row mx-auto items-center gap-12">
            <div class="w-full lg:w-7/12 xl:w-7/12">
                <div class="mt-10 text-center sm:text-start my-5">
                    <h2 class="text-gray">Looking For </h2>
                    <h1 class="font-bold">Home Renovation Services</h1>
                    <p class="text-gray">
                        Experience vibrant walls and advanced NANO technology-based
                        waterproofing
                    </p>
                </div>
                <div class="border p-5 border-black rounded-2xl">
                    <h3>What are you looking for?</h3>
                    <div class="mt-4">
                        <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-4">
                            <div>
                                <a href="/calculator">
                                    <div class="box1 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2"></div>
                                    <h5 class="text-center mt-2">Interior Painting</h5>
                                </a>
                            </div>
                            <div>
                                <a href="/exterior-cal1">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Exterior Painting.svg" alt="Exterior Painting" />
                                    </div>
                                    <h5 class="text-center mt-2">Exterior Painting</h5>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Wall Design Painting.svg" alt="Wall Design Painting" />
                                    </div>
                                    <h5 class="text-center mt-2">Wall Design Painting</h5>
                                </a>
                            </div>
                            <div>
                                <a href="/water-proff1">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Waterproofing Solutions.svg" alt="Waterproofing Solutions" />
                                    </div>
                                    <h5 class="text-center mt-2">Waterproofing Solutions</h5>
                                </a>
                            </div>
                        </div>
                        <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-4 mt-5">
                            <div>
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img alt="Fasle Ceiling Designs" src="assets/images/Rental Painting.svg" />
                                    </div>
                                    <h5 class="text-center mt-2">Fasle Ceiling Designs</h5>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Fasle Ceiling Designs.svg" alt="House Wallpaper" />
                                    </div>
                                    <h5 class="text-center mt-2">House Wallpaper</h5>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-200">
                                        <img src="assets/images/House Wallpaper.svg" alt="Fasle Ceiling Designs" />
                                    </div>
                                    <h5 class="text-center mt-2">Fasle Ceiling Designs</h5>
                                </a>
                            </div>
                            <div class="more-services">
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <h5 class="text-center">More Services</h5>
                                    </div>
                                </a>
                            </div>

                            <div class="service-new hidden">
                                <a href="/calculator">
                                    <div class="box1 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2"></div>
                                    <h5 class="text-center mt-2">Interior Painting</h5>
                                </a>
                            </div>
                            <div class="service-new hidden">
                                <a href="/exterior-cal1">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Exterior Painting.svg" alt="Exterior Painting" />
                                    </div>
                                    <h5 class="text-center mt-2">Exterior Painting</h5>
                                </a>
                            </div>
                            <div class="service-new hidden">
                                <a href="">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Wall Design Painting.svg" alt="Wall Design Painting" />
                                    </div>
                                    <h5 class="text-center mt-2">Wall Design Painting</h5>
                                </a>
                            </div>
                            <div class="service-new hidden">
                                <a href="/water-proff1">
                                    <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                                        <img src="assets/images/Waterproofing Solutions.svg" alt="Waterproofing Solutions" />
                                    </div>
                                    <h5 class="text-center mt-2">Waterproofing Solutions</h5>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="w-full lg:w-5/12 xl:w-5/12 justify-center flex relative mt-6 lg:mt-0">
                <img src="assets/images/home/hero-img.webp" alt="herp-img" />
            </div>
        </div>
    </section>
    <!-- slider end -->

    <!-- Offers and Discounts start -->
    <section class="py-100 px-4 z-0 position-relative" id="gallery">
        <div class="container mx-auto">
            <h2 class="text-center font-bold mb-4">Offers And Discounts</h2>

            <Swiper class="catalogue" :slides-per-view="1" :loop="true" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1100: { slidesPerView: 4 },
          }" :space-between="30" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }" :pauseAutoplayOnMouseEnter="true" :navigation="true" :pagination="{
            clickable: true,
          }">
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/offer1.webp" alt="Wall Texture Gallery" class="gallery-img" width="100%" />
                        <div class="absolute offer py-2 px-3">
                            <p>10% Off</p>
                        </div>

                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Painting Services</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/offer2.webp" alt="Stencil Designs" class="gallery-img" width="100%" />

                        <div class="absolute offer py-2 px-3">
                            <p>10% Off</p>
                        </div>
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Wall Designing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/offer3.webp" alt="Interior Painting" class="gallery-img" width="100%" />
                        <div class="absolute offer py-2 px-3">
                            <p>10% Off</p>
                        </div>
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Wood Coating & Finishing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/offer4.webp" alt="Exterior Painting" class="gallery-img" width="100%" />
                        <div class="absolute offer py-2 px-3">
                            <p>10% Off</p>
                        </div>
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Waterproofing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/offer1.webp" alt="Wall Texture Gallery" class="gallery-img" width="100%" />
                        <div class="absolute offer py-2 px-3">
                            <p>10% Off</p>
                        </div>

                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Painting Services</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    <!-- Offers and Discounts end -->

    <!-- Testimonials start -->
    <section id="testimonials " class="z-0 position-relative">
        <div class="container mx-auto">
            <h2 class="text-center font-bold mb-4">Testimonials</h2>

            <Swiper class="catalogue" :slides-per-view="1" :loop="true" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }" :pauseAutoplayOnMouseEnter="true" :navigation="true" :pagination="{
            clickable: true,
          }">
                <SwiperSlide class="h-100">
                    <div class="m-4 text-center pt-6 h-100">
                        <div class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100">
                            <div class="flex justify-center absolute review1">
                                <!-- <img src="assets/images/Review1.webp" alt="Review1" class="w-22" /> -->
                                <div class="review-content">
                                    R
                                </div>
                            </div>
                            <div class="mt-7">
                                <h5 class="font-semibold text-xl mb-1">Raman Mohan</h5>
                                <p class="text-gray">September 20, 2024</p>
                                <div class="flex justify-center">
                                    <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                </div>
                                <p class="review-txt">
                                    I could not find anything that would limit my rating of
                                    their work to four stars. This was our fourth experience
                                    with them. Their workmen are experts in their job. They
                                    won’t settle for the second best in whatever you choose for
                                    your home painting. Great job. Thanks team AapkaPainter.com.
                                    Good luck!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="m-4 text-center pt-6 h-100">
                        <div class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100">
                            <div class="flex justify-center absolute review1">
                                <!-- <img src="assets/images/Review2.webp" alt="Review1" class="w-22" /> -->
                                <div class="review-content">
                                    A
                                </div>
                            </div>
                            <div class="mt-7">
                                <h5 class="font-semibold text-xl mb-1">Adil Khan</h5>
                                <p class="text-gray">September 20, 2024</p>
                                <div class="flex justify-center">
                                    <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                </div>
                                <p class="review-txt">
                                    Smooth services given by apka painter team, great work by Mr
                                    Shishir project manager and Mr Veerpal who has taken care
                                    the work smoothly within given timeframe. They are happy to
                                    give any further help post completion of work. Highly
                                    recommended.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="m-4 text-center pt-6 h-100">
                        <div class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100">
                            <div class="flex justify-center absolute review1">
                                <!-- <img src="assets/images/Review3.webp" alt="Review1" class="w-22" /> -->
                                <div class="review-content">
                                    G
                                </div>
                            </div>
                            <div class="mt-7">
                                <h5 class="font-semibold text-xl mb-1">
                                    Gurusubrahmaniyan Sri
                                </h5>
                                <p class="text-gray">September 20, 2024</p>
                                <div class="flex justify-center">
                                    <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                </div>
                                <p class="review-txt">
                                    Overall verygood work. The site supervisor Mr. Ranjit is
                                    very kind and accomotative. Well done and please do get the
                                    job thro them as they are sincere and does their work to the
                                    full satisfaction of the customer.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="m-4 text-center pt-6 h-100">
                        <div class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100">
                            <div class="flex justify-center absolute review1">
                                <!-- <img src="assets/images/Review2.webp" alt="Review1" class="w-22" /> -->
                                <div class="review-content">
                                    A
                                </div>
                            </div>
                            <div class="mt-7">
                                <h5 class="font-semibold text-xl mb-1">Adil Khan</h5>
                                <p class="text-gray">September 20, 2024</p>
                                <div class="flex justify-center">
                                    <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                </div>
                                <p class="review-txt">
                                    Smooth services given by apka painter team, great work by Mr
                                    Shishir project manager and Mr Veerpal who has taken care
                                    the work smoothly within given timeframe. They are happy to
                                    give any further help post completion of work. Highly
                                    recommended.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    <!-- Testimonials end -->

    <!-- CTA start -->
    <section class="py-100 mx-3 lg-mx-0" id="cta">
        <div class="container mx-auto" id="cta-blog">
            <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 items-center">
                <div>
                    <img src="assets/images/home/cta-bgimg.webp" alt="cta" class="hidden lg:block" />
                    <img src="assets/images/cta-mob.webp" alt="cta" class="block lg:hidden rounded-2xl" />
                </div>
                <div class="text-center md:text-start">
                    <h5 class="text-black">Unable To Decide Upon a Colour?</h5>
                    <h2 class="text-black font-semibold">Books a Service</h2>
                    <h4>Self serve</h4>
                    <div class="justify-center sm:justify-start flex">
                        <button type="submit" class="mb-4 xl:mb-0 mt-4 text-white bg-green cta-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                            <span relative="relative z-10">Book Service</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- CTA start -->

    <!-- Inspirational Gallery start -->
    <section class="px-4" id="gallery">
        <div class="container mx-auto">
            <h2 class="text-center font-bold mb-4">What We Offer</h2>
            <Swiper class="catalogue" :slides-per-view="1" :loop="true" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }" :space-between="30" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }" :pauseAutoplayOnMouseEnter="true" :navigation="true" :pagination="{
            clickable: true,
          }">
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/painting-service.webp" alt="painting-service" class="gallery-img" width="100%" />
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Painting Services</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/wall-designing.webp" alt="wall-designing" class="gallery-img" width="100%" />
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Wall Designing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/wood-coating.webp" alt="wood-coating" class="gallery-img" width="100%" />
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Wood Coating & Finishing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/waterproofing.webp" alt="waterproofing" class="gallery-img" width="100%" />
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Waterproofing</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="relative">
                        <img src="assets/images/home/wall-designing.webp" alt="wall-designing" class="gallery-img" width="100%" />
                        <div class="bg-gallery p-4 sm:p-2 lg:p-4 absolute w-full text-center text-white text-xl">
                            <h4>Wall Designing</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    <!-- Inspirational Gallery end -->

    <!-- How We Works -->
    <section id="work" class="mx-4 md-mx-0 py-100">
        <div class="container mx-auto">
            <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-2 items-center">
                <div>
                    <h2 class="font-bold mb-4">How We Works</h2>
                    <div>
                        <div class="accordion flex flex-col items-center justify-center">
                            <!--  Panel 1  -->
                            <div class="w-full mb-4 ac-tab">
                                <input type="checkbox" name="panel" id="panel-1" class="hidden" />
                                <label for="panel-1" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work1.svg" alt="work" />
                                    <h5 class="ms-3 font-semibold">
                                        Free Survey & Quotation
                                    </h5>
                                </label>
                                <div class="accordion__content overflow-hidden">
                                    <p class="accordion__body pt-4 text-gray" id="panel1">
                                        Experience hassle-free house painting and waterproofing
                                        with our skilled professionals. Our team will assess the
                                        surface condition, identify areas needing special
                                        attention, and accurately measure the site using laser
                                        technology. We provide precise quotations, recommend
                                        suitable products, and suggest the right process for the
                                        job
                                    </p>
                                    <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Get Free Estimate</span>
                                    </button>
                                </div>
                            </div>
                            <!--  Panel 2  -->
                            <div class="w-full mb-4 ac-tab">
                                <input type="checkbox" name="panel" id="panel-2" class="hidden" />
                                <label for="panel-2" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work2.svg" alt="work" />
                                    <h5 class="ms-3 font-semibold">Accept Quotation</h5>
                                </label>
                                <div class="accordion__content overflow-hidden">
                                    <p class="accordion__body pt-4 text-gray" id="panel2">
                                        Experience hassle-free house painting and waterproofing
                                        with our skilled professionals. Our team will assess the
                                        surface condition, identify areas needing special
                                        attention, and accurately measure the site using laser
                                        technology. We provide precise quotations, recommend
                                        suitable products, and suggest the right process for the
                                        job
                                    </p>
                                    <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Get Free Estimate</span>
                                    </button>
                                </div>
                            </div>
                            <!--  Panel 3  -->
                            <div class="w-full mb-4 ac-tab">
                                <input type="checkbox" name="panel" id="panel-3" class="hidden" />
                                <label for="panel-3" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work3.svg" alt="work" />
                                    <h5 class="ms-3 font-semibold">
                                        Online Color Consultation
                                    </h5>
                                </label>
                                <div class="accordion__content overflow-hidden">
                                    <p class="accordion__body pt-4 text-gray" id="panel3">
                                        Experience hassle-free house painting and waterproofing
                                        with our skilled professionals. Our team will assess the
                                        surface condition, identify areas needing special
                                        attention, and accurately measure the site using laser
                                        technology. We provide precise quotations, recommend
                                        suitable products, and suggest the right process for the
                                        job
                                    </p>
                                    <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Get Free Estimate</span>
                                    </button>
                                </div>
                            </div>
                            <!--  Panel 4  -->
                            <div class="w-full mb-4 ac-tab">
                                <input type="checkbox" name="panel" id="panel-4" class="hidden" />
                                <label for="panel-4" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work4.svg" alt="work" />
                                    <h5 class="ms-3 font-semibold">Paint Begins</h5>
                                </label>
                                <div class="accordion__content overflow-hidden">
                                    <p class="accordion__body pt-4 text-gray" id="panel4">
                                        Experience hassle-free house painting and waterproofing
                                        with our skilled professionals. Our team will assess the
                                        surface condition, identify areas needing special
                                        attention, and accurately measure the site using laser
                                        technology. We provide precise quotations, recommend
                                        suitable products, and suggest the right process for the
                                        job
                                    </p>
                                    <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Get Free Estimate</span>
                                    </button>
                                </div>
                            </div>
                            <!--  Panel 5  -->
                            <div class="w-full mb-4 ac-tab">
                                <input type="checkbox" name="panel" id="panel-5" class="hidden" />
                                <label for="panel-5" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work5.svg" alt="work" />
                                    <h5 class="ms-3 font-semibold">
                                        Finishing And Handover
                                    </h5>
                                </label>
                                <div class="accordion__content overflow-hidden">
                                    <p class="accordion__body pt-4 text-gray" id="panel5">
                                        Experience hassle-free house painting and waterproofing
                                        with our skilled professionals. Our team will assess the
                                        surface condition, identify areas needing special
                                        attention, and accurately measure the site using laser
                                        technology. We provide precise quotations, recommend
                                        suitable products, and suggest the right process for the
                                        job
                                    </p>
                                    <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Get Free Estimate</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="assets/images/single-services/work.webp" width="100%" alt="work" class="ac-image" />

                </div>
            </div>
        </div>
    </section>
    <!-- How We Works -->

    <!--Video Testimonials start -->
    <section id="video-testimonials" class="pb-200">
        <div class="container mx-auto">
            <h2 class="text-center font-bold mb-4">Video Testimonials</h2>

            <Swiper class="catalogue" :slides-per-view="1" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }" :loop="true" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }" :pauseAutoplayOnMouseEnter="true" :navigation="true" :pagination="{
            clickable: true,
          }">
                <SwiperSlide class="h-100">
                    <div class="bg-white p-5 video-box rounded-2xl m-3">
                        <div class="relative cursor-pointer" onclick="toggleModal4()">
                            <img src="assets/images/video-testimonial1.webp" alt="video-box" class="rounded-2xl" />
                            <div class="absolute play-btn">
                                <img src="assets/images/play-btn.svg" alt="play-btn" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <img src="assets/images/user-img.webp" alt="user" class="w-22" />
                                <div class="ms-3">
                                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                                    <p>@staking</p>
                                </div>
                            </div>
                            <p class="text-xl text-black mt-3">
                                Faucibus eu condimentum maecenas sollicitudin vitae.
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="bg-white p-5 video-box rounded-2xl m-3">
                        <div class="relative cursor-pointer" onclick="toggleModal4()">
                            <img src="assets/images/video-testimonial1.webp" alt="video-box" class="rounded-2xl" />
                            <div class="absolute play-btn">
                                <img src="assets/images/play-btn.svg" alt="play-btn" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <img src="assets/images/user-img.webp" alt="user" class="w-22" />
                                <div class="ms-3">
                                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                                    <p>@staking</p>
                                </div>
                            </div>
                            <p class="text-xl text-black mt-3">
                                Faucibus eu condimentum maecenas sollicitudin vitae.
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="bg-white p-5 video-box rounded-2xl m-3">
                        <div class="relative cursor-pointer" onclick="toggleModal4()">
                            <img src="assets/images/video-testimonial1.webp" alt="video-box" class="rounded-2xl" />
                            <div class="absolute play-btn">
                                <img src="assets/images/play-btn.svg" alt="play-btn" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <img src="assets/images/user-img.webp" alt="user" class="w-22" />
                                <div class="ms-3">
                                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                                    <p>@staking</p>
                                </div>
                            </div>
                            <p class="text-xl text-black mt-3">
                                Faucibus eu condimentum maecenas sollicitudin vitae.
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100">
                    <div class="bg-white p-5 video-box rounded-2xl m-3">
                        <div class="relative cursor-pointer" onclick="toggleModal4()">
                            <img src="assets/images/video-testimonial1.webp" alt="video-box" class="rounded-2xl" />
                            <div class="absolute play-btn">
                                <img src="assets/images/play-btn.svg" alt="play-btn" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <img src="assets/images/user-img.webp" alt="user" class="w-22" />
                                <div class="ms-3">
                                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                                    <p>@staking</p>
                                </div>
                            </div>
                            <p class="text-xl text-black mt-3">
                                Faucibus eu condimentum maecenas sollicitudin vitae.
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <div id="video-popup" class="px-2 md:px-0 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden ">

                    <div class="bg-white w-10/12 lg:w-7/12 relative br-20">
                        <button type="button" class="text-white mr-2 absolute btn-position close-btn z-50" onclick="toggleModal4()">
                            <i class="fas fa-times"></i>
                        </button>

                        <div class="br-20">
                            <iframe width="100%" class="br-20" height="500" src="https://www.youtube.com/embed/KPJ5fRcfQBI?si=bIjdW5Az1Ocnbqn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="mt-4 px-5 pb-5">
                            <div class="flex items-center">
                                <img src="assets/images/user-img.webp" alt="user" class="w-22" />
                                <div class="ms-3">
                                    <h5 class="font-bold text-xl">Darin Nguyen</h5>
                                    <p>@staking</p>
                                </div>
                            </div>
                            <p class="text-xl text-black mt-3">
                                Faucibus eu condimentum maecenas sollicitudin vitae.
                            </p>

                        </div>
                        </div>
                    </div>
                </div>

            </Swiper>
        </div>
    </section>
    <!-- Video Testimonials end -->

    <section class="position-relative">

        <!-- CTA start -->
        <section class="px-4 cta-position">
            <div class="container mx-auto" id="cta-bg">
                <div class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column">
                    <div>
                        <img src="assets/images/home/home-cta.webp" alt="cta" class="hidden xl:block" />
                        <img src="assets/images/home/home-res-cta.webp" alt="cta" class="block xl:hidden rounded-2xl" />
                    </div>
                    <div class="text-center md:text-start mx-3 md-mx-0">
                        <h5 class="text-white">Unable To Decide Upon a Colour?</h5>
                        <h2 class="text-white font-semibold">
                            Get Free Quotation
                        </h2>
                        <h4>Self serve</h4>
                        <button type="button" onclick="toggleModal1()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                            <span relative="relative z-10">Enquire Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA start -->

        <section id="footer-home" class="pt-200 pb-10 px-4">
            <div class="container mx-auto">
                <div class="flex text-white flex-wrap items-start">
                    <div class="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mb-3 lg:mb-0">
                        <div class="mb-4">
                            <a href="home">
                                <h1>LOREM</h1>
                            </a>
                        </div>
                        <div>
                            <p class="w-75 mb-3">
                                Home Painting Service Provider - Interior Painting, Exterior Painting, Rental Painting, Texture, Stencil, Kids Decor, Wallpaper, Free Hand Art, False Ceiling, Deep Cleaning, Waterproofing Service Provider in Bangalore, Hyderabad, Mumbai, Pune, Delhi, Bhopal, Indore
                            </p>
                            <h4 class="text-2xl pb-4"> Subscribe to our Newsletter</h4>
                            <form class="flex w-full sm:w-4/5 relative">
                                <div class="sm:flex sm:flex-wrap w-full">
                                    <input type="email" id="email" class="text-sm block w-full py-4 ps-4 pr-50 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                                </div>
                                <button type="submit" class="w-30 text-white main-btn font-medium text-sm p-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12">
                        <h5 class="mb-4 font-medium">About Company</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Join Us</li>
                            <li>FAQs</li>
                            <li>T&C</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Our Work</h5>
                        <ul>
                            <li>Home Paint Designs</li>
                            <li>Painting Offers</li>
                            <li>Disinfection & Sanitation</li>
                            <li>Asian Colour Shades</li>
                            <li>Berger Colour Shades</li>
                            <li>Nerolac Colour Shades</li>
                            <li>Dulux Colour Shades</li>
                            <li>Sherwin William Colour Shades</li>
                            <li>HomeDecor Wallpaper</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-6/12 xl:w-2/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Knowledge</h5>
                        <ul>
                            <li>Painting World</li>
                            <li>पेंटिंग दुनिया</li>
                            <li>Paint Brand & Products</li>
                            <li>Do it Yourself (DIY)</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-6/12 xl:w-2/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Offices</h5>
                        <div class="flex mb-2">
                            <a href="mailto:  support@colourdrive.in" class="flex"><img src="assets/images/home/mail.svg">
                                <p class="ms-3 text-nowrap"> support@colourdrive.in</p>
                            </a>
                        </div>
                        <div class="flex mb-2">
                            <a href="tel:+91-8151825126" class="flex"><img src="assets/images/home/phone.svg">
                                <p class="ms-3 text-nowrap">+91-8151825126</p>
                            </a>
                        </div>
                        <ul>
                            <!-- Bangalore -->
                            <li class="flex accordion-toggle justify-between">
                                <div class="flex items-center">
                                    <img src="assets/images/home/location.svg">
                                    <p class="ms-3">Bangalore</p>
                                </div>

                                <span class="chevron"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.66338 7.98857C7.71504 7.97337 7.76921 7.96296 7.81921 7.94296C7.95504 7.88854 7.97837 7.85733 8.09003 7.7693L14.7599 1.36307C14.8291 1.28224 14.8991 1.19982 14.9407 1.10378C15.0874 0.764465 14.9532 0.336317 14.6341 0.131446C14.3607 -0.0438152 13.9807 -0.0438152 13.7074 0.131446C13.6616 0.160256 13.6233 0.197868 13.5808 0.23068L7.50005 6.07031L1.42018 0.23068L1.29351 0.131446C1.24518 0.106637 1.19935 0.077827 1.14935 0.0578201C0.796858 -0.0830288 0.353534 0.0418145 0.136872 0.352322C-0.045624 0.614813 -0.045624 0.97974 0.136872 1.24223C0.167705 1.28545 0.206037 1.32306 0.241036 1.36307L6.91089 7.7693C6.95339 7.80211 6.99172 7.83972 7.03756 7.86853C7.12839 7.92695 7.23005 7.96777 7.33755 7.98857C7.44422 8.00858 7.55421 7.99818 7.66338 7.98857Z" fill="white" />
                                    </svg>
                                </span>
                            </li>
                            <li class="accordion-content">
                                <ul>
                                    <li>#26, Pavitra Paradise, 1st Floor, 1st Cross, MS Ramaiah City Layout Road, JP Nagar 7th Phase, Bengaluru, Karnataka - 560076</li>
                                </ul>
                            </li>

                            <!-- Hyderabad -->
                            <li class="flex accordion-toggle justify-between">
                                <div class="flex items-center">
                                    <img src="assets/images/home/location.svg">
                                    <p class="ms-3">Hyderabad</p>
                                </div>

                                <span class="chevron"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.66338 7.98857C7.71504 7.97337 7.76921 7.96296 7.81921 7.94296C7.95504 7.88854 7.97837 7.85733 8.09003 7.7693L14.7599 1.36307C14.8291 1.28224 14.8991 1.19982 14.9407 1.10378C15.0874 0.764465 14.9532 0.336317 14.6341 0.131446C14.3607 -0.0438152 13.9807 -0.0438152 13.7074 0.131446C13.6616 0.160256 13.6233 0.197868 13.5808 0.23068L7.50005 6.07031L1.42018 0.23068L1.29351 0.131446C1.24518 0.106637 1.19935 0.077827 1.14935 0.0578201C0.796858 -0.0830288 0.353534 0.0418145 0.136872 0.352322C-0.045624 0.614813 -0.045624 0.97974 0.136872 1.24223C0.167705 1.28545 0.206037 1.32306 0.241036 1.36307L6.91089 7.7693C6.95339 7.80211 6.99172 7.83972 7.03756 7.86853C7.12839 7.92695 7.23005 7.96777 7.33755 7.98857C7.44422 8.00858 7.55421 7.99818 7.66338 7.98857Z" fill="white" />
                                    </svg>
                                </span>
                            </li>
                            <li class="accordion-content">
                                <ul>
                                    <li>#301, Ankitha Residency, Khanamet, Hitex Road, Kondapur, Hyderabad, Telangana - 500084</li>
                                </ul>
                            </li>

                            <!-- Mumbai -->
                            <li class="flex accordion-toggle justify-between">
                                <div class="flex items-center">
                                    <img src="assets/images/home/location.svg">
                                    <p class="ms-3">Mumbai</p>
                                </div>

                                <span class="chevron"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.66338 7.98857C7.71504 7.97337 7.76921 7.96296 7.81921 7.94296C7.95504 7.88854 7.97837 7.85733 8.09003 7.7693L14.7599 1.36307C14.8291 1.28224 14.8991 1.19982 14.9407 1.10378C15.0874 0.764465 14.9532 0.336317 14.6341 0.131446C14.3607 -0.0438152 13.9807 -0.0438152 13.7074 0.131446C13.6616 0.160256 13.6233 0.197868 13.5808 0.23068L7.50005 6.07031L1.42018 0.23068L1.29351 0.131446C1.24518 0.106637 1.19935 0.077827 1.14935 0.0578201C0.796858 -0.0830288 0.353534 0.0418145 0.136872 0.352322C-0.045624 0.614813 -0.045624 0.97974 0.136872 1.24223C0.167705 1.28545 0.206037 1.32306 0.241036 1.36307L6.91089 7.7693C6.95339 7.80211 6.99172 7.83972 7.03756 7.86853C7.12839 7.92695 7.23005 7.96777 7.33755 7.98857C7.44422 8.00858 7.55421 7.99818 7.66338 7.98857Z" fill="white" />
                                    </svg>
                                </span>
                            </li>
                            <li class="accordion-content">
                                <ul>
                                    <li>#8-A, Room No-281, Near Sanjog CHS, Mankhurd West, PMG Colony, Mumbai, Maharashtra - 400043</li>
                                </ul>
                            </li>

                            <!-- Pune -->
                            <li class="flex accordion-toggle justify-between">
                                <div class="flex items-center">
                                    <img src="assets/images/home/location.svg">
                                    <p class="ms-3">Pune</p>
                                </div>

                                <span class="chevron"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.66338 7.98857C7.71504 7.97337 7.76921 7.96296 7.81921 7.94296C7.95504 7.88854 7.97837 7.85733 8.09003 7.7693L14.7599 1.36307C14.8291 1.28224 14.8991 1.19982 14.9407 1.10378C15.0874 0.764465 14.9532 0.336317 14.6341 0.131446C14.3607 -0.0438152 13.9807 -0.0438152 13.7074 0.131446C13.6616 0.160256 13.6233 0.197868 13.5808 0.23068L7.50005 6.07031L1.42018 0.23068L1.29351 0.131446C1.24518 0.106637 1.19935 0.077827 1.14935 0.0578201C0.796858 -0.0830288 0.353534 0.0418145 0.136872 0.352322C-0.045624 0.614813 -0.045624 0.97974 0.136872 1.24223C0.167705 1.28545 0.206037 1.32306 0.241036 1.36307L6.91089 7.7693C6.95339 7.80211 6.99172 7.83972 7.03756 7.86853C7.12839 7.92695 7.23005 7.96777 7.33755 7.98857C7.44422 8.00858 7.55421 7.99818 7.66338 7.98857Z" fill="white" />
                                    </svg>
                                </span>
                            </li>
                            <li class="accordion-content">
                                <ul>
                                    <li>#102, Tranquility phase 2, Kodre Nagar, Shewalewadi, Manjari Farm, Pune - 412307</li>
                                </ul>
                            </li>

                            <!-- Indore -->
                            <li class="flex accordion-toggle justify-between">
                                <div class="flex items-center">
                                    <img src="assets/images/home/location.svg">
                                    <p class="ms-3">Indore</p>
                                </div>

                                <span class="chevron"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.66338 7.98857C7.71504 7.97337 7.76921 7.96296 7.81921 7.94296C7.95504 7.88854 7.97837 7.85733 8.09003 7.7693L14.7599 1.36307C14.8291 1.28224 14.8991 1.19982 14.9407 1.10378C15.0874 0.764465 14.9532 0.336317 14.6341 0.131446C14.3607 -0.0438152 13.9807 -0.0438152 13.7074 0.131446C13.6616 0.160256 13.6233 0.197868 13.5808 0.23068L7.50005 6.07031L1.42018 0.23068L1.29351 0.131446C1.24518 0.106637 1.19935 0.077827 1.14935 0.0578201C0.796858 -0.0830288 0.353534 0.0418145 0.136872 0.352322C-0.045624 0.614813 -0.045624 0.97974 0.136872 1.24223C0.167705 1.28545 0.206037 1.32306 0.241036 1.36307L6.91089 7.7693C6.95339 7.80211 6.99172 7.83972 7.03756 7.86853C7.12839 7.92695 7.23005 7.96777 7.33755 7.98857C7.44422 8.00858 7.55421 7.99818 7.66338 7.98857Z" fill="white" />
                                    </svg>
                                </span>
                            </li>
                            <li class="accordion-content">
                                <ul>
                                    <li>#32, 24 Bungalow, Part I, Scheme No 114, Near - Navodaya Medi Hubs, Indore, Madhya Pradesh - 452010</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>

        <section id="footer-home" class="border-t-gray px-4 ">
            <div class="container mx-auto py-10">
                <div class="flex text-white flex-wrap items-start">
                    <div class="w-full sm:w-6/12 lg:w-3/12">
                        <h5 class="mb-4 font-medium">Painters in Bangalore</h5>
                        <ul>
                            <li>Home Painting Charges Bangalore</li>
                            <li>Home Paint Designs Bangalore</li>
                            <li>Wood Painting Bangalore</li>
                            <li>WaterProofing Bangalore</li>
                            <li>Metal Painting Bangalore</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 lg:w-3/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Painters in Hyderabad</h5>
                        <ul>
                            <li>Home Painting Charges Hyderabad</li>
                            <li>Home Paint Designs Hyderabad</li>
                            <li>Wood Painting Hyderabad</li>
                            <li>WaterProofing Hyderabad</li>
                            <li>Metal Painting Hyderabad</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 lg:w-3/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Painters in Mumbai</h5>
                        <ul>
                            <li>Home Painting Charges Mumbai</li>
                            <li>Home Paint Designs Mumbai</li>
                            <li>Wood Painting Mumbai</li>
                            <li>WaterProofing Mumbai</li>
                            <li>Metal Painting Mumbai</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-6/12 lg:w-3/12 mt-3 lg:mt-0">
                        <h5 class="mb-4 font-medium">Painters in Pune</h5>
                        <ul>
                            <li>Home Painting Charges Pune</li>
                            <li>Home Paint Designs Pune</li>
                            <li>Wood Painting Pune</li>
                            <li>WaterProofing Pune</li>
                            <li>Metal Painting Pune</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container border-t mx-auto text-white py-3">
                <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <p>©LoremDesign2020.</p>
                    </div>
                    <div class="justify-start sm:justify-end lg:justify-center flex">
                        <p>Privacy Policy | Terms & Conditions</p>
                    </div>
                    <div>

                        <ul class="flex gap-4 sm:justify-start lg:justify-end">
                            <li>
                                <a href="https://www.google.com/maps/place/ColourDrive/@12.8937837,77.583295,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7e9b60370dd008f9!8m2!3d12.8937837!4d77.5854837?shorturl=1">
                                    <img src="../assets/images/home/google1.svg" alt="Google"> </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/colourdrive/">
                                    <img src="../assets/images/home/facebook.svg" alt="facebook"></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/colourdrive.in/">
                                    <img src="../assets/images/home/instagram.svg" alt="instagram"></a>
                            </li>
                            <li>
                                <a href="https://x.com/ColourDrive?mx=2">
                                    <img src="../assets/images/home/twitter.svg" alt="twitter"></a>
                            </li>
                            <li>
                                <a href="https://in.pinterest.com/colourdrive/">
                                    <img src="../assets/images/home/pinterest.svg" alt="pinterest"></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/colourdrive">
                                    <img src="../assets/images/home/linkdin.svg" alt="linkdin"></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCTtaHhqN87LYIGi-osmCLow">
                                    <img src="../assets/images/home/youtube1.svg" alt="youtube1"></a>
                            </li>
                            <li>
                                <a href="https://www.quora.com/profile/ColourDrive-1">
                                    <img src="../assets/images/home/quora.svg" alt="quora"></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </section>
    </section>

</div>
</template>

<style scoped>
@import '../assets/css/home.css';
</style>
