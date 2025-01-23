<script setup>
</script>

<template>
<!-- main banner start -->
<section id="blog-new" class="py-12 px-3">
    <div class="container mx-auto">
        <!-- <h1>Blog-Details</h1> -->
        <div class="flex items-center gap-2">
            <a href="index.vue">
                <p>Home</p>
            </a>
            <i class="fa-solid fa-chevron-right" style="color: #000000"></i>
            <p>Blog-Details</p>
        </div>
    </div>
</section>
<!-- main banner end -->

<section class="pt-100 pb-200 mx-4 " id="blog-details">
    <div class="container mx-auto">
        <div class="flex gap-4 flex-col xl:flex-row">
            <div class="w-full xl:w-9/12">
                <h2 class="font-bold">Post Title</h2>

                <div class="flex items-center gap-2">
                    <p>Author</p>
                    <p>|</p>
                    <p>Blog-Details</p>
                    <p>|</p>
                    <p class="text-gray">a min ago</p>
                </div>

                <div class="br-20 pt-5 ">
                    <img src="assets/images/blog-details/post.webp" alt="Post" class="br-20 pb-5" />
                    <div class="flex justify-between flex-column1 mb-3">
                        <div class="flex items-center">
                            <h5>Share this:-</h5>
                            <div class="ms-2">
                                <ul class="flex gap-4 sm:justify-start lg:justify-end">
                                    <li>
                                        <a href="https://www.google.com/maps/place/ColourDrive/@12.8937837,77.583295,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7e9b60370dd008f9!8m2!3d12.8937837!4d77.5854837?shorturl=1">
                                            <img src="../assets/images/google-pink.svg" alt="Google"> </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/colourdrive/">
                                            <img src="../assets/images/facebook-pink.svg" alt="facebook"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/colourdrive.in/">
                                            <img src="../assets/images/instagram-pink.svg" alt="instagram"></a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/ColourDrive?mx=2">
                                            <img src="../assets/images/twitter-pink.svg" alt="twitter"></a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/colourdrive/">
                                            <img src="../assets/images/pinterest-pink.svg" alt="pinterest"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/colourdrive">
                                            <img src="../assets/images/linkdin-pink.svg" alt="linkdin"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCTtaHhqN87LYIGi-osmCLow">
                                            <img src="../assets/images/youtube-pink.svg" alt="youtube1"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.quora.com/profile/ColourDrive-1">
                                            <img src="../assets/images/quora-pink.svg" alt="quora"></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <button class="justify-center flex p-3 rounded-lg font-bold hover:bg-opacity-40 text-gray-700 flex-grow btn-green">
                                Home Decor Special
                            </button>
                            <button class="btn-green justify-center flex p-3 rounded-lg font-bold hover:bg-opacity-40 text-gray-700 flex-grow">
                                Design Painting
                            </button>
                        </div>
                    </div>
                    <div class="blog-list mb-4 border-top pt-4">
                        <h2 class="font-bold ps-6 border-left mb-4">Table of Content</h2>
                        <ul class="text-gray">
                            <li><a class="flex items-center" href="#best-paint-colours" onclick="scrollToSection(event, 'best-paint-colours')"> <img src="../assets/images/blog-detail1.png" width="5%" class="rounded me-3"> Best Paint Colours </a></li>
                            <li><a class="flex items-center" href="#neutral-shades" onclick="scrollToSection(event, 'neutral-shades')"> <img src="../assets/images/blog-detail2.png" width="5%" class="rounded me-3"> Neutral Shades </a></li>
                            <li><a class="flex items-center" href="#tranquil-blue" onclick="scrollToSection(event, 'tranquil-blue')"> <img src="../assets/images/blog-detail3.png" width="5%" class="rounded me-3"> Tranquil Blue </a></li>
                            <li><a class="flex items-center" href="#earthy-green" onclick="scrollToSection(event, 'earthy-green')"> <img src="../assets/images/blog-detail4.png" width="5%" class="rounded me-3"> Earthy Green </a></li>
                            <li><a class="flex items-center" href="#warm-yellow" onclick="scrollToSection(event, 'warm-yellow')"> <img src="../assets/images/blog-detail5.png" width="5%" class="rounded me-3"> Warm Yellow </a></li>
                            <li><a class="flex items-center" href="#statement-red" onclick="scrollToSection(event, 'statement-red')"> <img src="../assets/images/blog-detail6.png" width="5%" class="rounded me-3"> Statement Red </a></li>
                            <li><a class="flex items-center" href="#navy-blue-white" onclick="scrollToSection(event, 'navy-blue-white')"> <img src="../assets/images/blog-detail7.png" width="5%" class="rounded me-3"> Navy Blue and White </a></li>
                            <li><a class="flex items-center" href="#grey-yellow" onclick="scrollToSection(event, 'grey-yellow')"> <img src="../assets/images/blog-detail8.png" width="5%" class="rounded me-3"> Grey and Yellow </a></li>
                            <li><a class="flex items-center" href="#beige-soft-green" onclick="scrollToSection(event, 'beige-soft-green')"> <img src="../assets/images/blog-detail9.png" width="5%" class="rounded me-3"> Beige and Soft Green </a></li>
                            <li><a class="flex items-center" href="#blush-pink-grey" onclick="scrollToSection(event, 'blush-pink-grey')"> <img src="../assets/images/blog-detail10.png" width="5%" class="rounded me-3"> Blush Pink and Grey </a></li>
                            <li><a class="flex items-center" href="#teal-mustard-yellow" onclick="scrollToSection(event, 'teal-mustard-yellow')"> <img src="../assets/images/blog-detail11.png" width="5%" class="rounded me-3"> Teal and Mustard Yellow </a></li>
                        </ul>
                    </div>

                    <div>
                        <div class="mb-3 border-top pt-4" id="best-paint-colours">
                            <h5 class="font-semibold mb-3">Best Paint Colours </h5>
                            <p class="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="neutral-shades">
                            <h5 class="font-semibold mb-3">Neutral Shades </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="tranquil-blue">
                            <h5 class="font-semibold mb-3">Tranquil Blue</h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="earthy-green">
                            <h5 class="font-semibold mb-3">Earthy Green </h5>
                            <p class="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="warm-yellow">
                            <h5 class="font-semibold mb-3">Warm Yellow </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="statement-red">
                            <h5 class="font-semibold mb-3">Statement Red </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="navy-blue-white">
                            <h5 class="font-semibold mb-3">Navy Blue and White </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="grey-yellow">
                            <h5 class="font-semibold mb-3">Grey and Yellow </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="beige-soft-green">
                            <h5 class="font-semibold mb-3">Beige and Soft Green </h5>
                            <p class="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="blush-pink-grey">
                            <h5 class="font-semibold mb-3"> Blush Pink and Grey </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>

                        <div class="mb-3 border-top pt-4" id="teal-mustard-yellow">
                            <h5 class="font-semibold mb-3">Teal and Mustard Yellow </h5>
                            <p class="text-gray mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
                                egestas ultrices. Vestibulum et neque id ex semper varius a sit
                                amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
                                iaculis finibus egestas. Nam viverra urna quis odio efficitur
                                malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                                Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Curabitur sed commodo leo.
                                Suspendisse potenti. Maecenas gravida ipsum placerat ligula
                                posuere, ut rhoncus velit eleifend.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- CTA start -->
                <section class="py-8">
                    <div class="container mx-auto" id="cta-blogdetails">
                        <div class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column flex flex-sm row dflex">
                            <div>
                                <img src="assets/images/blog-details/cta-blogdetails.webp" alt="cta" />
                                <!-- <img
                    src="assets/images/cta-mob.webp"
                    alt="cta"
                    class="block lg:hidden rounded-2xl"
                  /> -->
                            </div>
                            <div class="text-center md:text-start">
                                <h5 class="text-black">Unable To Decide Upon a Colour?</h5>
                                <h2 class="text-black font-semibold">
                                    Book A Free Wall2Wall Inspection
                                </h2>
                                <h4>Self serve</h4>
                                <button type="submit" class="mb-4 xl:mb-0 mt-4 text-white bg-green cta-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">Estimate Cost</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- CTA start -->

                <div class="pb-6">
                    <h2 class="font-bold">More Posts</h2>
                    <div class="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                        <a href="blog-details">
                            <div class="bg-white shadow-mds rounded-2xl border">
                                <div>
                                    <div>
                                        <img src="assets/images/blog/blog7.webp" alt="Interior Painting" width="100%" class="br-16" />
                                        <div class="p-5">
                                            <p>Category</p>
                                            <h5 class="font-semibold">Article Title</h5>
                                            <p class="text-gray">
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae
                                                habitasse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <div class="flex items-center mt-5">
                                            <img src="assets/images/blog/user-thumb.svg" alt="Interior Painting" />
                                            <div class="ms-3">
                                                <p class="text-black">Jane Doe</p>
                                                <p>Senior Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="blog-details">
                            <div class="bg-white shadow-mds rounded-2xl border">
                                <div>
                                    <div>
                                        <img src="assets/images/blog/blog8.webp" alt="Interior Painting" width="100%" class="br-16" />
                                        <div class="p-5">
                                            <p>Category</p>
                                            <h5 class="font-semibold">Article Title</h5>
                                            <p class="text-gray">
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae
                                                habitasse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <div class="flex items-center mt-5">
                                            <img src="assets/images/blog/user-thumb.svg" alt="Interior Painting" />
                                            <div class="ms-3">
                                                <p class="text-black">Jane Doe</p>
                                                <p>Senior Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="blog-details">
                            <div class="bg-white shadow-mds rounded-2xl border">
                                <div>
                                    <div>
                                        <img src="assets/images/blog/blog9.webp" alt="Interior Painting" width="100%" class="br-16" />
                                        <div class="p-5">
                                            <p>Category</p>
                                            <h5 class="font-semibold">Article Title</h5>
                                            <p class="text-gray">
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae
                                                habitasse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <div class="flex items-center mt-5">
                                            <img src="assets/images/blog/user-thumb.svg" alt="Interior Painting" />
                                            <div class="ms-3">
                                                <p class="text-black">Jane Doe</p>
                                                <p>Senior Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="pb-8 pt-5 border-top">
                    <h2 class="font-bold">Comments</h2>
                    <div>
                        <form class="w-full sm:w-7/12">
                            <div class="sm:flex sm:flex-wrap">
                                <div class="mb-5 sm:w-1/2 px-1">
                                    <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Name</label>
                                    <input type="text" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                                </div>
                                <div class="mb-5 sm:w-1/2 px-1">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                                </div>
                                <div class="mb-5 w-full px-1">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Message</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Comment..."></textarea>
                                </div>
                            </div>

                            <button type="submit" class="text-white bg-green font-medium rounded-lg text-sm w-sm:3 px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">Comment</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div class="bg-white shadow-mds rounded-2xl p-5 flex flex-col lg:flex-row gap-5 mb-4">
                        <div class="flex justify-center items-center flex-col md:w-1/12">
                            <img src="assets/images/blog-details/user2.svg" alt="Interior Painting" />
                            <p>User</p>
                        </div>
                        <div class="md:w-11/12 justify-between flex flex-col">
                            <p class="text-gray text-center sm:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                            </p>
                            <div class="flex gap-5 justify-center sm:justify-start">
                                <p class="text-gray">Reply</p>
                                <p class="text-blue">a min ago</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white shadow-mds rounded-2xl p-5 flex flex-col lg:flex-row gap-5 mb-4">
                        <div class="flex justify-center items-center flex-col md:w-1/12">
                            <img src="assets/images/blog-details/user2.svg" alt="Interior Painting" />
                            <p>User</p>
                        </div>
                        <div class="md:w-11/12 justify-between flex flex-col">
                            <p class="text-gray text-center sm:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                            </p>
                            <div class="flex gap-5 justify-center sm:justify-start">
                                <p class="text-gray">Reply</p>
                                <p class="text-blue">a min ago</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white shadow-mds rounded-2xl p-5 flex flex-col lg:flex-row gap-5 mb-4">
                        <div class="flex justify-center items-center flex-col md:w-1/12">
                            <img src="assets/images/blog-details/user2.svg" alt="Interior Painting" />
                            <p>User</p>
                        </div>
                        <div class="md:w-11/12 justify-between flex flex-col">
                            <p class="text-gray text-center sm:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                            </p>
                            <div class="flex gap-5 justify-center sm:justify-start">
                                <p class="text-gray">Reply</p>
                                <p class="text-blue">a min ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full xl:w-3/12">
                <div class="relative">
                    <img src="assets/images/blog-details/blog-offer.webp" alt="blog-offer" class="br-20" />

                    <div class="justify-between flex flex-col absolute offer-benner1 py-5 text-white">
                        <div>
                            <p>Lightning Deal</p>
                            <h5 class="font-semibold">
                                <span style="font-size: 28px"> Flat 25% </span>off on Home
                                Painting
                            </h5>
                        </div>

                        <button type="submit" class="mb-4 xl:mb-0 mt-4 text-black bg-yellow cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                            <span relative="relative z-10">Get Free Estimate</span>
                        </button>
                    </div>
                </div>

                <div class="p-5 bg-lightpink rounded-tlb br-20 mt-6">
                    <h6 class="font-semibold text-xl">
                        Create your dream home with our painting experts
                    </h6>
                    <p class="my-3 text-gray text-sm">
                        Fill the form below to book a free site evaluation by a Beautiful
                        Homes Painting Service expert.
                    </p>
                    <div>
                        <form id="enquiryForm">
                            <div class="sm:flex sm:flex-wrap">
                                <div class="mb-5 w-full px-1">
                                    <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Name</label>
                                    <input type="text" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div class="mb-5 w-full px-1">
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
                                    <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I would like to receive important updates and
                                    notifications on WhatsApp</label>
                            </div>
                            <button type="submit" class="text-white main-btn font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">Enquire Now</span>
                            </button>
                        </form>
                        <!-- Success and error messages -->
                        <div id="message-blog" class="mt-4 hidden text-center"></div>

                    </div>
                </div>
                <div class="sm:flex xl:flex-col">
                    <div class="mt-6 me-8 xl:me-0" id="recent-post">
                        <h2 class="font-bold ps-6 border-left">Recent Posts</h2>
                        <ul class="text-gray-600 mt-4">
                            <li><a href="">
                                    Acrylic Emulsion Paint Vs Distemper Paint Vs Enamel, Texture
                                    Paints Vs Mettalic Vs Polish Paints</a>
                            </li>

                            <li><a href=""> Best Bedroom Paint Colours 2024 </a></li>

                            <li><a href="">
                                    Will Birla Opus be the future of the house painting industry?</a>
                            </li>

                            <li><a href=""> Painting Cost Per Square Foot in Mumbai </a></li>
                            <li><a href="">
                                    Elevate Your Space: Inspiring Ideas for Interior Design of a
                                    Home Room </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-6" id="recent-post">
                        <h2 class="font-bold ps-6 border-left">Categories</h2>
                        <ul class="text-gray-600 mt-4">
                            <li><a href=""> Home Decor Special </a></li>

                            <li><a href=""> Design Painting </a></li>

                            <li><a href=""> Primer </a></li>

                            <li><a href=""> False Ceiling </a></li>
                            <li><a href=""> Deep Cleaning </a></li>

                            <li><a href=""> Wood Paint </a></li>

                            <li><a href=""> Metal Paint </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
@import '../assets/css/blog-details.css';
</style>
