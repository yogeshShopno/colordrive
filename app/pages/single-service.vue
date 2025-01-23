<script setup>
</script>
<template>
<!-- main banner start -->
<section id="single-services" class="ptb-80 px-4 px-md-0">
    <div class="container mx-auto text-center">
        <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-2 items-center">
            <div>
                <h2 class="font-semibold">Best Home Painting Services in Mumbai</h2>
                <div class="grid gap-x-8 gap-y-4 grid-cols-2 lg:grid-cols-4 mt-4">
                    <div>
                        <div class="box1 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2"></div>
                        <h5 class="text-center mt-2">Interior Painting</h5>
                    </div>
                    <div>
                        <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                            <img src="assets/images/Exterior Painting.svg" alt="Exterior Painting" />
                        </div>
                        <h5 class="text-center mt-2">Exterior Painting</h5>
                    </div>
                    <div>
                        <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                            <img src="assets/images/Wall Design Painting.svg" alt="Wall Design Painting" />
                        </div>
                        <h5 class="text-center mt-2">Wall Design Painting</h5>
                    </div>
                    <div>
                        <div class="box2 justify-center flex rounded-2xl py-3 items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-2">
                            <img src="assets/images/Waterproofing Solutions.svg" alt="Waterproofing Solutions" />
                        </div>
                        <h5 class="text-center mt-2">Waterproofing Solutions</h5>
                    </div>
                </div>
            </div>
            <div>
                <img src="assets/images/single-services/hero-bg.webp" width="100%" class="rounded-2xl" alt="hero-bg" />
            </div>
        </div>
    </div>
</section>
<!-- main banner end -->

<!-- service-details section-start -->
<section class="py-100 px-4 px-md-0 " id="services-new">
    <div class="container flex flex-col lg:flex-row mx-auto gap-8">
        <div class="w-full lg:w-7/12 xl:w-8/12">
            <div class="bg-lightgreen border-green p-5 flex justify-between rounded-2xl items-center flex-sm-row">
                <div class="flex items-center">
                    <div class="user1">
                        <img src="assets/images/single-services/user1.svg" width="100%" alt="users" />
                    </div>
                    <div class="user2">
                        <img src="assets/images/single-services/user2.svg" width="100%" alt="users" />
                    </div>
                    <div class="user3">
                        <p>+30</p>
                    </div>
                    <h5 class="font-semibold ms-3">Recent Projects</h5>
                </div>
                <div class="pt-3 sm-pt-0">
                    <button type="submit" class="text-green bg-white font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                        <span relative="relative z-10">See All</span>
                    </button>
                </div>
            </div>
            <div class="pt-8">
                <h2 class="font-bold mb-4">Painting choices for your home</h2>
                <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-31">
                    <div class="bg-white shadow-mds rounded-2xl">
                        <div>
                            <div class="flex justify-center relative">
                                <img src="assets/images/single-services/painting1.webp" alt="Home Painting" width="100%" class="br-16" />
                                <h5 class="absolute text-bottom text-white">Home Painting</h5>
                                <h5 class="absolute text-top text-white p-2">Flat 25% off</h5>
                            </div>
                            <div class="p-5">
                                <ul class="mt-2">
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Budget paints starting at 5 Rs/sq.ft.
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Complete Post Painting Cleanup
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        1-2 Day Quick Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="px-5 flex pb-5 gap-5 justify-between items-center">
                            <div>
                                <a href="#">
                                    <p class="">
                                        Show More
                                        <i class="fa-solid fa-arrow-right ms-2" style="color: #000000"></i>
                                    </p>
                                </a>
                            </div>
                            <div>
                                <button type="submit" onclick="openModal()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                    <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="">Estimate Cost</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-mds rounded-2xl">
                        <div>
                            <div class="flex justify-center relative">
                                <img src="assets/images/single-services/painting2.webp" alt="Home Painting" width="100%" class="br-16" />
                                <h5 class="absolute text-bottom text-white">Home Painting</h5>
                                <h5 class="absolute text-top text-white p-2">Flat 25% off</h5>
                            </div>
                            <div class="p-5">
                                <ul class="mt-2">
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Budget paints starting at 5 Rs/sq.ft.
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Complete Post Painting Cleanup
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        1-2 Day Quick Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="px-5 flex pb-5 gap-5 justify-between items-center">
                            <div>
                                <a href="#">
                                    <p class="">
                                        Show More
                                        <i class="fa-solid fa-arrow-right ms-2" style="color: #000000"></i>
                                    </p>
                                </a>
                            </div>
                            <div>
                                <button type="submit" onclick="openModal()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                    <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="">Estimate Cost</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-mds rounded-2xl">
                        <div>
                            <div class="flex justify-center relative">
                                <img src="assets/images/single-services/painting3.webp" alt="Home Painting" width="100%" class="br-16" />
                                <h5 class="absolute text-bottom text-white">Home Painting</h5>
                                <h5 class="absolute text-top text-white p-2">Flat 25% off</h5>
                            </div>
                            <div class="p-5">
                                <ul class="mt-2">
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Budget paints starting at 5 Rs/sq.ft.
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Complete Post Painting Cleanup
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        1-2 Day Quick Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="px-5 flex pb-5 gap-5 justify-between items-center">
                            <div>
                                <a href="#">
                                    <p class="">
                                        Show More
                                        <i class="fa-solid fa-arrow-right ms-2" style="color: #000000"></i>
                                    </p>
                                </a>
                            </div>
                            <div>
                                <button type="submit" onclick="openModal()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                    <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="">Estimate Cost</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-mds rounded-2xl">
                        <div>
                            <div class="flex justify-center relative">
                                <img src="assets/images/single-services/painting4.webp" alt="Home Painting" width="100%" class="br-16" />
                                <h5 class="absolute text-bottom text-white">Home Painting</h5>
                                <h5 class="absolute text-top text-white p-2">Flat 25% off</h5>
                            </div>
                            <div class="p-5">
                                <ul class="mt-2">
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Budget paints starting at 5 Rs/sq.ft.
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        Complete Post Painting Cleanup
                                    </li>
                                    <li class="flex">
                                        <div>
                                            <i class="fa-solid fa-check me-3" style="color: #4e4e4e"></i>
                                        </div>
                                        1-2 Day Quick Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="px-5 flex pb-5 gap-5 justify-between items-center">
                            <div>
                                <a href="#">
                                    <p class="">
                                        Show More
                                        <i class="fa-solid fa-arrow-right ms-2" style="color: #000000"></i>
                                    </p>
                                </a>
                            </div>
                            <div>
                                <button type="submit" onclick="openModal()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                    <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="">Estimate Cost</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-5/12 xl:w-4/12">
            <h2 class="font-bold mb-4">Offers for you</h2>
            <div class="bg-lightgreen p-5 flex justify-between rounded-2xl">
                <div>
                    <p>Lightning Deal</p>
                    <h5 class="font-semibold">
                        <span style="font-size: 28px"> Flat 25% </span>off on Home
                        Painting
                    </h5>
                    <button type="submit" class="mt-3 text-green bg-white font-medium rounded-50 text-sm px-5 py-2 sm:px-8 sm:py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                        <span relative="relative z-10">Get Free Estimate</span>
                    </button>
                </div>
                <img src="assets/images/single-services/home.svg" alt="home" />
            </div>
        </div>
    </div>
</section>
<!-- service-details section-end -->

<!-- design and experience section start -->
<section id="design-experience" class="md-mx-0">
    <div class="container mx-auto">
        <h2 class="font-bold mb-4">Design And Experience</h2>
        <Swiper class="catalogue" :slides-per-view="1" :loop="true" :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }" :pauseAutoplayOnMouseEnter="true" :navigation="true">
            <SwiperSlide class="h-100">
                <div class="bg-white shadow-mds rounded-2xl m-3">
                    <div>
                        <div class="flex justify-center w-full relative max-w-sm mx-auto h-auto ">
                            <img src="assets/images/single-services/design-and-experience1.webp" alt="design-and-experience" width="100%" class="br-16 w-full max-w-sm mx-auto h-auto relative z-0" />
                        </div>
                        <div class="p-3 xl:p-5 text-center">
                            <h5 class="font-semibold">Painting</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                    <div class="px-5 flex pb-5 gap-5 justify-center flex">
                        <a href="#">
                            <div class="more-btn justify-center flex items-center">
                                <i class="fa-solid fa-chevron-right" style="color: #000000"></i></div>
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide class="h-100">
                <div class="bg-white shadow-mds rounded-2xl m-3">
                    <div>
                        <div class="flex justify-center">
                            <img src="assets/images/single-services/design-and-experience2.webp" alt="design-and-experience" width="100%" class="br-16" />
                        </div>
                        <div class="p-3 xl:p-5 text-center">
                            <h5 class="font-semibold">Full Home Interiors</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                    <div class="px-5 flex pb-5 gap-5 justify-center flex">
                        <a href="#">
                            <div class="more-btn justify-center flex items-center">
                                <i class="fa-solid fa-chevron-right" style="color: #000000"></i></div>
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide class="h-100">
                <div class="bg-white shadow-mds rounded-2xl m-3">
                    <div>
                        <div class="flex justify-center">
                            <img src="assets/images/single-services/design-and-experience3.webp" alt="design-and-experience" width="100%" class="br-16" />
                        </div>
                        <div class="p-3 xl:p-5 text-center">
                            <h5 class="font-semibold">Luxury Interiors</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                    <div class="px-5 flex pb-5 gap-5 justify-center flex">
                        <a href="#">
                            <div class="more-btn justify-center flex items-center">
                                <i class="fa-solid fa-chevron-right" style="color: #000000"></i></div>
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide class="h-100">
                <div class="bg-white shadow-mds rounded-2xl m-3">
                    <div>
                        <div class="flex justify-center">
                            <img src="assets/images/single-services/design-and-experience4.webp" alt="design-and-experience" width="100%" class="br-16" />
                        </div>
                        <div class="p-3 xl:p-5 text-center">
                            <h5 class="font-semibold">Painting</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                    <div class="px-5 flex pb-5 gap-5 justify-center flex">
                        <a href="#">
                            <div class="more-btn justify-center flex items-center">
                                <i class="fa-solid fa-chevron-right" style="color: #000000"></i></div>
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide class="h-100">
                <div class="bg-white shadow-mds rounded-2xl m-3">
                    <div>
                        <div class="flex justify-center">
                            <img src="assets/images/single-services/design-and-experience1.webp" alt="design-and-experience" width="100%" class="br-16" />
                        </div>
                        <div class="p-3 xl:p-5 text-center">
                            <h5 class="font-semibold">Painting</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                    <div class="px-5 flex pb-5 gap-5 justify-center flex">
                        <a href="#">
                            <div class="more-btn justify-center flex items-center">
                                <i class="fa-solid fa-chevron-right" style="color: #000000"></i></div>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
</section>
<!-- design and experience section end -->

<!-- Brand Logos-->
<section id="logos" class="py-100 mx-4 md-mx-0">
    <!-- <div class="container mx-auto"> -->
    <h2 class="font-bold mb-4 text-center">Suppliers brand</h2>
    <Swiper class="brand mx-2" :slides-per-view="1" :loop="true" :space-between="30" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 6.5 },
          }" :modules="[SwiperAutoplay, SwiperEffectCreative]" :autoplay="{
            delay: 1000,
            disableOnInteraction: true,
          }" :pauseAutoplayOnMouseEnter="true" ,>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand1.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand2.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand3.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand4.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand5.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 justify-center m-3">
                <img src="assets/images/brand6.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand7.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand8.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
            <div class="w-full relative mx-auto h-auto overflow-hidden br-20 shadow11 m-3">
                <img src="assets/images/brand10.webp" alt="brand" class="rounded-2xl transition-all duration-300 hover:scale-110 relative" />
            </div>
        </SwiperSlide>
    </Swiper>
    <!-- </div> -->
</section>
<!-- Brand Logos-->

<!-- How We Works -->
<section id="work" class="mx-4 md-mx-0">
    <div class="container mx-auto">
        <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-2 items-center">
            <div>
                <h2 class="font-bold mb-4">How We Works</h2>
                <div>
                    <div class="accordion flex flex-col items-center justify-center">
                        <!--  Panel 1  -->
                        <div class="w-full mb-4">
                            <input type="checkbox" name="panel" id="panel-1" class="hidden" />
                            <label for="panel-1" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work1.svg" alt="work" />
                                <h5 class="ms-3 font-semibold">
                                    Free Survey & Quotation
                                </h5>
                            </label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body pt-4 text-gray" id="panel1">
                                    Experience hassle-free house painting and waterproofing with
                                    our skilled professionals. Our team will assess the surface
                                    condition, identify areas needing special attention, and
                                    accurately measure the site using laser technology. We
                                    provide precise quotations, recommend suitable products, and
                                    suggest the right process for the job
                                </p>
                                <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Get Free Estimate</span>
                                </button>
                            </div>
                        </div>
                        <!--  Panel 2  -->
                        <div class="w-full mb-4">
                            <input type="checkbox" name="panel" id="panel-2" class="hidden" />
                            <label for="panel-2" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work2.svg" alt="work" />
                                <h5 class="ms-3 font-semibold">Accept Quotation</h5>
                            </label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body pt-4 text-gray" id="panel2">
                                    Experience hassle-free house painting and waterproofing with
                                    our skilled professionals. Our team will assess the surface
                                    condition, identify areas needing special attention, and
                                    accurately measure the site using laser technology. We
                                    provide precise quotations, recommend suitable products, and
                                    suggest the right process for the job
                                </p>
                                <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Get Free Estimate</span>
                                </button>
                            </div>
                        </div>
                        <!--  Panel 3  -->
                        <div class="w-full mb-4">
                            <input type="checkbox" name="panel" id="panel-3" class="hidden" />
                            <label for="panel-3" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work3.svg" alt="work" />
                                <h5 class="ms-3 font-semibold">
                                    Online Color Consultation
                                </h5>
                            </label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body pt-4 text-gray" id="panel3">
                                    Experience hassle-free house painting and waterproofing with
                                    our skilled professionals. Our team will assess the surface
                                    condition, identify areas needing special attention, and
                                    accurately measure the site using laser technology. We
                                    provide precise quotations, recommend suitable products, and
                                    suggest the right process for the job
                                </p>
                                <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Get Free Estimate</span>
                                </button>
                            </div>
                        </div>
                        <!--  Panel 4  -->
                        <div class="w-full mb-4">
                            <input type="checkbox" name="panel" id="panel-4" class="hidden" />
                            <label for="panel-4" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work4.svg" alt="work" />
                                <h5 class="ms-3 font-semibold">Paint Begins</h5>
                            </label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body pt-4 text-gray" id="panel4">
                                    Experience hassle-free house painting and waterproofing with
                                    our skilled professionals. Our team will assess the surface
                                    condition, identify areas needing special attention, and
                                    accurately measure the site using laser technology. We
                                    provide precise quotations, recommend suitable products, and
                                    suggest the right process for the job
                                </p>
                                <button type="submit" class="mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Get Free Estimate</span>
                                </button>
                            </div>
                        </div>
                        <!--  Panel 5  -->
                        <div class="w-full mb-4">
                            <input type="checkbox" name="panel" id="panel-5" class="hidden" />
                            <label for="panel-5" class="relative block bg-white text-black pt-4 rounded-2xl flex items-center"><img src="assets/images/single-services/work5.svg" alt="work" />
                                <h5 class="ms-3 font-semibold">
                                    Finishing And Handover
                                </h5>
                            </label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body pt-4 text-gray" id="panel5">
                                    Experience hassle-free house painting and waterproofing with
                                    our skilled professionals. Our team will assess the surface
                                    condition, identify areas needing special attention, and
                                    accurately measure the site using laser technology. We
                                    provide precise quotations, recommend suitable products, and
                                    suggest the right process for the job
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
                <img src="assets/images/single-services/work.webp" width="100%" alt="work" />
            </div>
        </div>
    </div>
</section>
<!-- How We Works -->

<!-- Colour Drive Quality Assurance -->
<section class="py-100 mx-4 md-mx-0" id="assurance">
    <div class="container mx-auto">
        <h2 class="font-bold mb-4">Colour Drive Quality Assurance</h2>
        <div class="container mx-auto">
            <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-5 justify-center">
                <div class="assurance1 px-5 justify-center flex flex-col">
                    <div class="flex justify-center">
                        <img src="assets/images/single-services/assurance1.svg" alt="assurance" />
                    </div>
                    <h5 class="text-center mt-4 font-bold text-white">Member Card</h5>
                </div>
                <div class="assurance1 px-5 justify-center flex flex-col">
                    <div class="flex justify-center">
                        <img src="assets/images/single-services/assurance2.svg" alt="assurance" />
                    </div>
                    <h5 class="text-center mt-4 font-bold text-white">Warranty Card</h5>
                </div>
                <div class="assurance2 px-5 justify-center flex flex-col">
                    <div class="flex justify-center">
                        <img src="assets/images/single-services/assurance3.svg" alt="assurance" />
                    </div>
                    <h5 class="text-center mt-4 font-bold text-white">
                        Service Quality
                    </h5>
                </div>
                <div class="assurance3 px-5 justify-center flex flex-col">
                    <div class="flex justify-center">
                        <img src="assets/images/single-services/assurance4.svg" alt="assurance" />
                    </div>
                    <h5 class="text-center mt-4 font-bold text-white">
                        Product Jejuneness
                    </h5>
                </div>
                <div class="assurance3 px-5 justify-center flex flex-col">
                    <div class="flex justify-center">
                        <img src="assets/images/single-services/assurance5.svg" alt="assurance" />
                    </div>
                    <h5 class="text-center mt-4 font-bold text-white">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Colour Drive Quality Assurance -->

<!-- Quality Assurance description -->
<section class="mx-4 md-mx-0">
    <div class="container mx-auto">
        <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 items-center">
            <div>
                <img src="assets/images/single-services/quality.webp" width="100%" alt="Quality" class="rounded-2xl hidden md:block" />
            </div>
            <div>
                <h2 class="font-bold mb-4">Quality Assurance description</h2>
                <img src="assets/images/single-services/quality.webp" width="100%" alt="Quality" class="rounded-2xl md:hidden" />
                <p class="text-gray mt-4 md:mt-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>
                <p class="mt-2 text-gray">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </div>
</section>
<!-- Quality Assurance description -->

<!-- faq -->
<section id="faq" class="px-4 pt-100 pb-200">
    <div class="container mx-auto">
        <h2 class="text-center font-bold mb-5">FAQs</h2>
        <div class="accordion flex flex-col items-center justify-center">
            <!--  Panel 1  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-11" class="hidden" />
                <label for="panel-11" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel11">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen.
                    </p>
                </div>
            </div>
            <!--  Panel 2  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-12" class="hidden" />
                <label for="panel-12" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel12">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                        possimus at a cum saepe molestias modi illo facere ducimus
                        voluptatibus praesentium deleniti fugiat ab error quia sit
                        perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <!--  Panel 3  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-13" class="hidden" />
                <label for="panel-13" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel13">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                        possimus at a cum saepe molestias modi illo facere ducimus
                        voluptatibus praesentium deleniti fugiat ab error quia sit
                        perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <!--  Panel 4  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-14" class="hidden" />
                <label for="panel-14" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                        possimus at a cum saepe molestias modi illo facere ducimus
                        voluptatibus praesentium deleniti fugiat ab error quia sit
                        perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <!--  Panel 5  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-15" class="hidden" />
                <label for="panel-15" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel15">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                        possimus at a cum saepe molestias modi illo facere ducimus
                        voluptatibus praesentium deleniti fugiat ab error quia sit
                        perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- faq -->

<div class="px-2 md:px-0 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden z-100000" id="modal">
    <div class="service-modal sm:my-8 bg-white rounded-lg relative align-center sm:align-middle text-left sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
            <button type="button" class="bg-gray-500 text-white hover:bg-gray-700 close-btn" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-content ">
            <div>
                <img src="assets/images/single-services/imag1.webp" alt="Home Painting" width="100%" />
            </div>
            <div>
                <div class="p-3 sm:p-6">
                    <h2 class="font-bold mb-4">Offers for you</h2>
                    <div class="offer-benner py-12 rounded-xl shadow-lg">
                        <div class="px-6">
                            <p>Lightning Deal</p>
                            <h5 class="font-semibold">
                                <span style="font-size: 28px"> Flat 25% </span>off on Home Painting
                            </h5>
                            <!-- <a href=""> -->
                            <button onclick="openModal1()" type="submit" class=" mt-3 text-white main-btngreen font-medium rounded-50 text-sm px-8 py-3 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">Get Free Estimate</span>
                            </button>
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
                <div class="p-3 sm:p-6 border-tb">
                    <h2 class="font-bold mb-4">Detailed Definitions</h2>
                    <p class="text-gray">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially
                        unchanged.
                    </p>
                </div>
                <div class="p-3 sm:p-6">
                    <h2 class="font-bold mb-4">Packages</h2>
                    <div class="relative overflow-x-auto br-trb">
                        <table class="w-full text-sm text-left rtl:text-right text-clack">
                            <thead class="text-xs text-black uppercase">
                                <tr>
                                    <th scope="col" class="px-5 py-3">
                                        Features
                                    </th>
                                    <th scope="col" class="px-5 py-7 br-custom justify-center text-center text-nowrap">
                                        <h3 class="mb-2">Basic</h3>
                                        <p>1 Months</p>
                                    </th>
                                    <th scope="col" class="px-5 py-7 bb relative">
                                        <img src="assets/images/single-services/most-popular.svg" class="absolute ads" alt="most-popular" />
                                        <div class="justify-center text-center text-nowrap">
                                            <h3 class="mb-2">Standard</h3>
                                            <p>2 Months</p>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-5 py-7 br-custom justify-center text-center text-nowrap">
                                        <h3 class="mb-2">Sponsored</h3>
                                        <p>3 Months</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white-500">
                                    <th scope="row" class="px-5 py-4 font-medium text-gray whitespace-nowrap">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-lightpink br-15">
                                    <th scope="row" class="px-5 py-4 font-medium whitespace-nowrap text-gray">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-white-500">
                                    <th scope="row" class="px-5 py-4 font-medium text-gray whitespace-nowrap">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-lightpink br-15">
                                    <th scope="row" class="px-5 py-4 font-medium whitespace-nowrap text-gray">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-white-500">
                                    <th scope="row" class="px-5 py-4 font-medium text-gray whitespace-nowrap">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-lightpink br-15">
                                    <th scope="row" class="px-5 py-4 font-medium whitespace-nowrap text-gray">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-white-500">
                                    <th scope="row" rowspan="2" class="px-5 py-4 font-medium text-gray whitespace-nowrap">
                                        Lorem ipsum dolor sit amet,
                                    </th>
                                    <td class="px-5 py-4 blr bb">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 bb">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr bb">
                                        <div class="justify-center flex">
                                            <img src="assets/images/single-services/check.svg" alt="Check" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex flex-col text-center">
                                            <p>
                                                $ 35<span style="color: #999999">
                                                    /Month
                                                </span>
                                            </p>
                                            <button type="submit" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                                <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="" class="" style="text-wrap: nowrap">$49
                                                    <span style="font-weight: 400">Save 29%
                                                    </span></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex flex-col text-center">
                                            <p>
                                                $ 35<span style="color: #999999">
                                                    /Month
                                                </span>
                                            </p>
                                            <button type="submit" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                                <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="" class="" style="text-wrap: nowrap">$70
                                                    <span style="font-weight: 400">Save 29%
                                                    </span></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td class="px-5 py-4 blr">
                                        <div class="justify-center flex flex-col text-center">
                                            <p>
                                                $ 35<span style="color: #999999">
                                                    /Month
                                                </span>
                                            </p>
                                            <button type="submit" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40" data-v-inspector="app/pages/index.vue:853:13" data-v-02281a80="">
                                                <span relative="relative z-10" data-v-inspector="app/pages/index.vue:857:15" data-v-02281a80="" class="" style="text-wrap: nowrap">$99
                                                    <span style="font-weight: 400">Save 29%
                                                    </span></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="p-3 sm:p-6 border-tb">
                    <h2 class="font-bold mb-4">How We Work?</h2>
                    <div class="relative">
                        <div class="work">
                            <div class="z-50 relative">
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/booking.svg" alt="booking" />
                                    <h5 class="ms-3">Booking</h5>
                                </div>
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/mesurement.svg" alt="mesurement" />
                                    <h5 class="ms-3">Mesurement</h5>
                                </div>
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/product-selection.svg" alt="product-selection" />
                                    <h5 class="ms-3">Product Selection</h5>
                                </div>
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/cost-estimation.svg" alt="cost-estimation" />
                                    <h5 class="ms-3">Cost Estimation</h5>
                                </div>
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/work-completion.svg" alt="work-completion" />
                                    <h5 class="ms-3">Work Completion</h5>
                                </div>
                                <div class="flex items-center mb-8">
                                    <img src="assets/images/single-services/customer-satisfaction.svg" alt="customer-satisfaction" />
                                    <h5 class="ms-3">Customer Satisfaction</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 sm:p-6" id="overview">
                    <h2 class="font-bold mb-4">Overviews</h2>
                    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white shadow-mds rounded-2xl p-6">
                            <img src="assets/images/single-services/trained-professionals.svg" />
                            <h5 class="mt-3">Trained Professionals</h5>
                        </div>
                        <div class="bg-white shadow-mds rounded-2xl p-6">
                            <img src="assets/images/single-services/background-verified.svg" />
                            <h5 class="mt-3">Background Verified</h5>
                        </div>
                        <div class="bg-white shadow-mds rounded-2xl p-6">
                            <img src="assets/images/single-services/warranty.svg" />
                            <h5 class="mt-3">30-day Warranty</h5>
                        </div>
                    </div>
                </div>
                <div class="p-3 sm:p-6 border-tb">
                    <h2 class="font-bold mb-4">Testimonials</h2>
                    <!-- Testimonials start -->
                    <Swiper class="text1" :slides-per-view="1" :loop="true" :breakpoints="{
                              640: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                              1024: { slidesPerView: 2 },
                            }" :space-between="30" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
                              delay: 3000,
                              disableOnInteraction: true,
                            }" :pauseAutoplayOnMouseEnter="true" :navigation="true" :pagination="{
            clickable: true,
          }">
                        <SwiperSlide class="h-100 mt-12">
                            <div class="bg-lightpink p-5 rounded-2xl relative text-center">
                                <!-- <div
                                  class="flex justify-center absolute review1"
                                > -->
                                <img src="assets/images/contact/review.svg" alt="Review1" class="w-22 flex justify-center absolute review1" />
                                <!-- </div> -->
                                <div class="mt-7">
                                    <h5 class="font-semibold">Cha Ji-Hun</h5>
                                    <div class="flex justify-center">
                                        <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                    </div>
                                    <p class="text-gray">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam scelerisque posuere
                                        vivamus egestas porttitor.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="h-100 mt-12">
                            <div class="bg-lightpink p-5 rounded-2xl relative text-center">
                                <div class="flex justify-center absolute review1">
                                    <img src="assets/images/contact/review.svg" alt="Review1" class="w-22" />
                                </div>
                                <div class="mt-7">
                                    <h5 class="font-semibold">Cha Ji-Hun</h5>
                                    <div class="flex justify-center">
                                        <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                    </div>
                                    <p class="text-gray">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam scelerisque posuere
                                        vivamus egestas porttitor.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="h-100 mt-12">
                            <div class="bg-lightpink p-5 rounded-2xl relative text-center">
                                <!-- <div
                                  class="flex justify-center absolute review1"
                                > -->
                                <img src="assets/images/contact/review.svg" alt="Review1" class="w-22 flex justify-center absolute review1" />
                                <!-- </div> -->
                                <div class="mt-7">
                                    <h5 class="font-semibold">Cha Ji-Hun</h5>
                                    <div class="flex justify-center">
                                        <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                                    </div>
                                    <p class="text-gray">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam scelerisque posuere
                                        vivamus egestas porttitor.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <!-- Testimonials end -->
                </div>
                <div class="p-6 ">
                    <h2 class="font-bold mb-4">FAQs</h2>

                    <div class="accordion flex flex-col items-center justify-center">
                        <!--  Panel 1  -->
                        <div class="w-full shadow11 mb-4">
                            <input type="checkbox" name="panel" id="panel-11" class="hidden" />
                            <label for="panel-11" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body p-4 text-black" id="panel11">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make
                                    a type specimen.
                                </p>
                            </div>
                        </div>
                        <!--  Panel 2  -->
                        <div class="w-full shadow11 mb-4">
                            <input type="checkbox" name="panel" id="panel-12" class="hidden" />
                            <label for="panel-12" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body p-4 text-black" id="panel12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iusto possimus at a cum
                                    saepe molestias modi illo facere ducimus
                                    voluptatibus praesentium deleniti fugiat ab
                                    error quia sit perspiciatis velit
                                    necessitatibus.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Lorem ipsum
                                    dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <!--  Panel 3  -->
                        <div class="w-full shadow11 mb-4">
                            <input type="checkbox" name="panel" id="panel-13" class="hidden" />
                            <label for="panel-13" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body p-4 text-black" id="panel13">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iusto possimus at a cum
                                    saepe molestias modi illo facere ducimus
                                    voluptatibus praesentium deleniti fugiat ab
                                    error quia sit perspiciatis velit
                                    necessitatibus.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Lorem ipsum
                                    dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <!--  Panel 4  -->
                        <div class="w-full shadow11 mb-4">
                            <input type="checkbox" name="panel" id="panel-14" class="hidden" />
                            <label for="panel-14" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body p-4 text-black" id="panel14">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iusto possimus at a cum
                                    saepe molestias modi illo facere ducimus
                                    voluptatibus praesentium deleniti fugiat ab
                                    error quia sit perspiciatis velit
                                    necessitatibus.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Lorem ipsum
                                    dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <!--  Panel 5  -->
                        <div class="w-full shadow11 mb-4">
                            <input type="checkbox" name="panel" id="panel-15" class="hidden" />
                            <label for="panel-15" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                            <div class="accordion__content overflow-hidden">
                                <p class="accordion__body p-4 text-black" id="panel15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iusto possimus at a cum
                                    saepe molestias modi illo facere ducimus
                                    voluptatibus praesentium deleniti fugiat ab
                                    error quia sit perspiciatis velit
                                    necessitatibus.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Lorem ipsum
                                    dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- </div> -->
</div>
</template>

<style scoped>
@import '../assets/css/single-service.css';
</style>
