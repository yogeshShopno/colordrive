<script>
//add javascript of this template only
</script>
<template>
<div>
    <!-- footer -->
    <section class="relative bg-gray1">
        <!-- CTA start -->
        <section class="px-4 cta-position">
            <div class="container mx-auto" id="cta-bg">
                <div class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column">
                    <div>
                        <img src="assets/images/cta2.webp" alt="cta" class="hidden xl:block" />
                        <img src="assets/images/res-cta.webp" alt="cta" class="block xl:hidden rounded-2xl" />
                    </div>
                    <div class="text-center md:text-start mx-3 md-mx-0">
                        <h5 class="text-white">Unable To Decide Upon a Colour?</h5>
                        <h2 class="text-white font-semibold">
                            Request Home Painting Services !
                        </h2>
                        <h4>Share details for Free Online-Quotation.</h4>
                        <button type="button" onclick="toggleModal1()" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                            <span relative="relative z-10">Enquire Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA start -->
        <section id="footer" class="pt-200  ">
            <div class="footerbtn-position py-2 z-8">
                <a href="https://wa.me/919014182316" target="_blank">
                    <img src="../assets/images/whatsapp-icon.png" alt="whatapp-icon" class="whatsapp">
                </a>
                <div class="flex gap-1 sm:hidden bg-dark px-2 py-1 rounded-md">
                    <img src="assets/images/login.svg" alt="user" width="30px" />
                    <button type="button" onclick="toggleModal1()" class="m-0 text-white font-medium rounded-lg text-sm px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">
                        Login
                    </button>
                </div>
                <a id="more-btn">
                    <button type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" class="m-0 text-white rounded px-8 py-2.5 more-btn pulse-animation">
                        More
                    </button>

                </a>
                <div id="drawer-right-example" class="fixed top-0 right-0 more_drawer_fldd h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w25-25 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
                    <h5 class="font-bold mb-4">Wall Texture Painting Designs</h5>
                    <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 close-button  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close menu</span>
                    </button>

                <form id="enquiryForm" class="form-filter">
                    <div class="sm:flex sm:flex-wrap">
                   
                        <div class="mb-5 w-full">
                            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="default" class="z-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Category</option>
                                <option>Royale Play Infinitex</option>
                                <option>Royale Play Metallic</option>
                                <option>Interior Textures</option>
                                <option>Royale Play Dune</option>
                                <option>Royale Play Stucco</option>
                                <option>Royale Play Safari</option>
                                <option>Royale Play Antico</option>
                                <option>Royale Play Special Effects</option>
                                <option>Royale Play Neu</option>
                                <option>Archi Concrete</option>
                            </select>
                        </div>
                        <div class="mb-5 w-full">
                            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Best For
                            </label>
                            <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Best For</option>
                                <option>Living Room</option>
                                <option>Bedroom</option>
                                <option>Study Room</option>
                                <option>Kids Room</option>
                                <option>Kitchen Room</option>
                                <option>Dining Hall</option>
                                <option>Reception Space</option>
                                <option>Master Bedroom</option>
                                <option>Staircase</option>
                                <option>Creative Office Space</option>
                                <option>Contiguous Space</option>
                                <option>Guest Room</option>
                                <option>Presentaion Hall</option>
                                <option>Coworking Space</option>
                            </select>
                        </div>
                        <div class="mb-5 w-full">
                            <label for="search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Search</label>
                            <input type="search" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                    </div>
                   
                    <button type="submit" class="text-white main-btn font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                        <span relative="relative z-10">Reset</span>
                    </button>
                </form>

                <!-- Success and error messages -->
                <div id="message3" class="mt-4 hidden text-center"></div>
                  
                </div>
            </div>

            <div class="container mx-auto  pb-4 lg:pb-0 px-4">
                <div class="flex text-white flex-wrap">
                    <div class="w-full md:w-full lg:w-4/12 xl:w-4/12 mb-3 lg:mb-0">
                        <div class="mb-4">
                            <a href="/landing1">
                                <h1>LOREM</h1>
                            </a>
                        </div>
                        <div>
                            <p class="w-75 mb-3">
                                Home Painting Service Provider - Interior Painting, Exterior Painting, Rental Painting, Texture, Stencil, Kids Decor, Wallpaper, Free Hand Art, False Ceiling, Deep Cleaning, Waterproofing Service Provider in Bangalore, Hyderabad, Mumbai, Pune, Delhi, Bhopal, Indore
                            </p>
                            <ul class="p-0 m-0">
                                <li>
                                    <a href="mailto: support@colourdrive.in">support@colourdrive.in</a>
                                </li>
                                <li><a href="tel: +91-8151825126">+91-8151825126 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12">
                        <h5 class="mb-4 font-medium">Infomation</h5>
                        <ul>
                            <li>Paints & Colours</li>
                            <li>Services</li>
                            <li>Waterproofing</li>
                            <li>Inspiration</li>
                            <li>Home Decor</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div class="w-6/12 md:w-5/12 lg:w-3/12 xl:w-3/12">
                        <h5 class="mb-4 font-medium">Services</h5>
                        <ul>
                            <li>Expert Site Supervision</li>
                            <li>Trained Professionals</li>
                            <li>Dust Free Mechanised Painting</li>
                            <li>Superior Finish</li>
                            <li>Full Home Cleaning After Painting</li>
                            <li>Asian Paints Warranty</li>
                        </ul>
                    </div>
                    <div class="w-full md:w-4/12 lg:w-3/12 xl:w-3/12">
                        <h5 class="mb-4 font-medium">Send Email</h5>
                        <div class="mb-3">
                            <form class="flex" id="subscription">
                                <div class="sm:flex sm:flex-wrap w-75">
                                    <input type="email" id="email" class="text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                                </div>
                                <button type="submit" class="w-25 text-white main-btn font-medium text-sm p-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Send</span>
                                </button>
                            </form>

                            <!-- Success and error messages -->
                            <div id="message1" class="hidden text-center"></div>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container border-t py-3 mx-auto text-white px-4  pb-50">
                <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 items-center">
                    <div>
                        <p>©LoremDesign2020.</p>
                    </div>
                    <div class="justify-start sm:justify-end lg:justify-center flex">
                        <p>Privacy Policy | Terms & Conditions</p>
                    </div>
                    <div>
                        <ul class="flex gap-4 sm:justify-start lg:justify-end items-center">
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
    <!-- footer -->

</div>
</template>

<style scoped>
@import '../assets/css/main.css';
</style>
