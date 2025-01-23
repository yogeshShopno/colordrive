<script>
//add javascript of this template only
</script>
<template>
<!-- main banner start -->
<section id="contact-benner" class="py-12 px-3">
    <div class="container mx-auto">
        <!-- <h1>Contact Us</h1> -->
        <div class="flex items-center gap-2">
            <a href="index.vue">
                <p>Home</p>
            </a>
            <i class="fa-solid fa-chevron-right" style="color: #000000"></i>
            <p>Contact Us</p>
        </div>
    </div>
</section>
<!-- main banner end -->

<!-- get in touch section start -->
<section class="py-100 mx-3 md:mx-0">
    <div class="container mx-auto flex flex-col md:flex-row mx-auto items-center gap-8">
        <div class="w-full md:w-6/12 lg:w-5/12">
            <div class="border p-5 br-20">
                <h2 class="font-bold mb-4">Get in Touch</h2>
                <p class="text-center sm:text-start">
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                    molestie vel, ornare non id blandit netus.
                </p>
                <div class="mt-4">
                    <form action="thankyou" >
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Name</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                        <div class="mb-5">
                            <label for="mobile" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Mobile</label>
                            <input type="tel" id="mobile" placeholder="Mobile" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div class="mb-5">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select City</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>

                        <div class="mb-5">
                            <label for="message11" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message11" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>

                        <button type="submit" class="text-black bg-yellow-700 hover:bg-yellow-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            Send
                        </button>
                    </form>
                </div>

                <div class="mt-4 gap-4 grid">
                    <div class="gap-3 flex flex-col sm:flex-row">
                        <div class="items-center flex">
                            <img src="assets/images/contact/phone.svg" />
                            <div class="ms-3">
                                <h6 class="font-semibold">PHONE</h6>
                                <p class="text-gray">03 5432 1234</p>
                            </div>
                        </div>
                        <div class="items-center flex">
                            <img src="assets/images/contact/envolape.svg" />
                            <div class="ms-3">
                                <h6 class="font-semibold">EMAIL</h6>
                                <p class="text-gray">info@marcc.com.au</p>
                            </div>
                        </div>
                    </div>
                    <div class="items-center flex">
                        <img src="assets/images/contact/location.svg" />
                        <div class="ms-3">
                            <h6 class="font-semibold">ADDRESS</h6>
                            <p class="text-gray">
                                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                                Bangalore-560016
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-full md:w-6/12 lg:w-7/12">
            <img src="assets/images/contact/contact.webp" alt="Contact" width="100%" />
        </div>
    </div>
</section>
<!-- get in touch section start -->

<!-- Testimonials start -->
<section id="testimonial1" class="px-4">
    <div class="container mx-auto">
        <h2 class="text-center font-bold mb-4">Testimonials</h2>
        <div>
            <Swiper class="text1" :slides-per-view="1" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }" :loop="true" :space-between="30" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :autoplay="{
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam scelerisque posuere vivamus egestas porttitor.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100 mt-12">
                    <div class="bg-lightpink p-5 rounded-2xl relative text-center">
                        <!-- <div class="flex justify-center absolute review1"> -->
                        <img src="assets/images/contact/review.svg" alt="Review1" class="w-22 flex justify-center absolute review1" />
                        <!-- </div> -->
                        <div class="mt-7">
                            <h5 class="font-semibold">Cha Ji-Hun</h5>
                            <div class="flex justify-center">
                                <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                            </div>
                            <p class="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam scelerisque posuere vivamus egestas porttitor.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam scelerisque posuere vivamus egestas porttitor.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="h-100 mt-12">
                    <div class="bg-lightpink p-5 rounded-2xl relative text-center">
                        <!-- <div class="flex justify-center absolute review1"> -->
                        <img src="assets/images/contact/review.svg" alt="Review1" class="w-22 flex justify-center absolute review1" />
                        <!-- </div> -->
                        <div class="mt-7">
                            <h5 class="font-semibold">Cha Ji-Hun</h5>
                            <div class="flex justify-center">
                                <img src="assets/images/stars.svg" alt="stars" class="my-4 star" />
                            </div>
                            <p class="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam scelerisque posuere vivamus egestas porttitor.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>
<!-- Testimonials end -->

<!-- faq -->
<section id="faq" class="px-4 pt-100 pb-200">
    <div class="container mx-auto">
        <h2 class="text-center font-bold mb-5">FAQs</h2>
        <div class="accordion flex flex-col items-center justify-center">
            <!--  Panel 1  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-1" class="hidden" />
                <label for="panel-1" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen.
                    </p>
                </div>
            </div>
            <!--  Panel 2  -->
            <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input type="checkbox" name="panel" id="panel-2" class="hidden" />
                <label for="panel-2" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel1">
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
                <input type="checkbox" name="panel" id="panel-3" class="hidden" />
                <label for="panel-3" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel1">
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
                <input type="checkbox" name="panel" id="panel-4" class="hidden" />
                <label for="panel-4" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel1">
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
                <input type="checkbox" name="panel" id="panel-5" class="hidden" />
                <label for="panel-5" class="relative block bg-white text-black p-4 rounded-2xl">Questions text goes here</label>
                <div class="accordion__content overflow-hidden">
                    <p class="accordion__body p-4 text-black" id="panel1">
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
</template>

<style scoped>
@import '../assets/css/contact.css';
</style>
