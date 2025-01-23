<script>
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";
    import "swiper/css"; // Importing Swiper styles
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    export default {
        head() {
            return {
                link: [
                    // Custom CSS file
                    {
                        rel: "stylesheet",
                        href: "../assets/css/main.css",
                    },
                    // Select2 CSS
                    {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0/css/select2.min.css",
                    },
                ],

                // script: [
                //     // jQuery
                //     {
                //         src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
                //         body: true,
                //     },
                //     // Custom JS file
                //     {
                //         src: "/js/index.js",
                //         type: "text/javascript",
                //         body: true,
                //     },
                //     // Select2 JS
                //     {
                //         src: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0/js/select2.min.js",
                //         type: "text/javascript",
                //         body: true,
                //     },

                // ],
            };
        },
    };
</script>
<template>
    <!-- topbar start -->
    <section id="topbar" class="px-auto px-4">
        <div class="container mx-auto">
            <div class="flex items-center flex-col md:flex-row py-3 md:py-0">
                <div class="w-full md:w-5/12 lg:w-6/12 flex justify-center md:justify-start">
                    <img src="assets/images/offer.webp" alt="logo" width="100%" class="offer-width" />
                </div>
                <div class="w-full md:w-7/12 lg:w-6/12 flex gap-x-3 justify-between md:justify-end">
                    <button type="button"
                        class="m-0 text-white rounded-lg px-3 sm:px-5 md:px-3 lg:px-5 py-2.5 hidden sm:block">
                        Vendor Registration
                    </button>
                    <div>
                        <ul class="space-x-6">
                            <button type="button"
                                class="flex relative group m-0 text-white rounded-lg px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">
                                Select City
                                <i class="fa-solid fa-chevron-down fa-2xs pt-3 ps-2"></i>
                                <!-- Submenu starts -->
                                <ul
                                    class="z-10 absolute bg-white p-3 w-44 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-2xl text-black">
                                    <li>
                                        <a href="#" class="text-sm hover:bg-slate-100 leading-8">United States</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm hover:bg-slate-100 leading-8">Canada</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm hover:bg-slate-100 leading-8">France</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm hover:bg-slate-100 leading-8">Germany</a>
                                    </li>
                                </ul>
                            </button>
                            <!-- Submenu ends -->
                        </ul>
                    </div>
                    <div class="flex gap-2">
                        <img src="assets/images/login.svg" alt="user" width="30px" />
                        <button type="button" onclick="toggleModal1()"
                            class="m-0 text-white font-medium rounded-lg text-sm px-3 sm:px-5 md:px-3 lg:px-5 py-2.5">
                            Login
                        </button>
                    </div>

                    <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden h-full" id="modal1">
                        <div
                            class="flex items-center justify-center min-height-100vh h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div class="fixed inset-0 transition-opacity">
                                <div class="absolute inset-0 bg-gray-900 opacity-75" />
                            </div>
                            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div id="custom-popup"
                                class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <div id="login">
                                    <div class="grid grid-cols-2 items-center res-pos">
                                        <div class="p-8 lg:p-10">
                                            <h2 class="font-bold">Back to Your Digital Life.</h2>
                                            <p class="text-gray text-center sm:text-start">Choose one of the Option to
                                                go</p>

                                            <form class="mt-5">
                                                <div class="sm:flex sm:flex-wrap">
                                                    <div class="mb-5 w-full">
                                                        <label for="email"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                        <input type="email" id="email"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                            placeholder="Email" required />
                                                    </div>
                                                    <div class="mb-5 w-full">
                                                        <label for="password"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                        <input type="password" id="password" placeholder="Password"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                            required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-gray">Or Continue With</p>
                                                </div>
                                                <div class="grid grid-cols-3 gap-3 mt-2">
                                                    <a href="#">
                                                        <div class="border-green br-5">
                                                            <img src="assets/images/1.svg" alt="google" class="br-5" />
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div class="border-green br-5">
                                                            <img src="assets/images/2.svg" alt="meta" class="br-5" />
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div class="border-green br-5">
                                                            <img src="assets/images/3.svg" alt="apple" class="br-5" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="grid grid-cols-2 mt-3">
                                                    <button type="submit"
                                                        class="text-white bg-green font-medium rounded1 text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40">
                                                        <span relative="relative z-10">Log in</span>
                                                    </button>
                                                    <button type="button"
                                                        class="text-black bg-white border-green font-medium rounded text-sm w-full px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
                                                        onclick="toggleModal1AndModal2()">
                                                        <span relative="relative z-10">Sign up</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="bg-login">
                                            <!-- <img src="assets/images/bg-img.webp" width="100%" alt="bg-login" /> -->
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="px-4 py-3 text-right"> -->
                                <button type="button" class="bg-gray-500 text-white hover:bg-gray-700 close-btn"
                                    onclick="toggleModal1()">
                                    <i class="fas fa-times"></i>
                                </button>
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>

                    <div class="px-2 md:px-0 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden"
                        id="modal2">
                        <div id="custom-popup" class="bg-white rounded-lg relative align-center sm:max-w-lg sm:w-full"
                            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div>
                                <button type="button" class="bg-gray-500 text-white hover:bg-gray-700 close-btn"
                                    onclick="toggleModal2()">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div id="login" class="registration">
                                <div class="items-center">
                                    <!-- <div class="w-5/12">
                                        <img src="assets/images/signup.webp" width="100%" alt="bg-login" class="sign-up" />
                                    </div> -->
                                    <div>
                                        <img src="assets/images/banner.webp" alt="registration-banner"
                                            class="hidden md:block">
                                        <img src="assets/images/banner-mb.webp" alt="registration-banner"
                                            class="md:hidden">
                                    </div>
                                    <div class="w-full p-8 lg:p-10">
                                        <h2 class="font-bold">Enter Mobile Number To Continue</h2>
                                        <p class="text-gray-500 mb-3 text-center sm:text-start">Never Shared</p>

                                        <form class="gap-2 flex flex-col " id="enquiryForm">
                                            <div class="flex gap-3 grid sm:grid-cols-2">
                                                <div class="mb-2">
                                                    <label for="name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                    <input type="text" id="name"
                                                        class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                        placeholder="Enter Name" required />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                    <input type="email" id="email"
                                                        class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                        placeholder="Enter Email" required />
                                                </div>
                                            </div>
                                            <div class="flex gap-3 grid sm:grid-cols-2">
                                                <div class="mb-2">
                                                    <label for="password"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                    <input type="password" id="password"
                                                        class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                                        placeholder="Password" required />
                                                </div>
                                                <div class="mb-2 radio1 flex justify-between flex-col">
                                                    <label for="phone-input"
                                                        class="text-sm font-medium text-gray-900">OTP or
                                                        Password</label>

                                                    <div class="flex gap-2 mt-2 sm:mt-0">
                                                        <!-- OTP Radio Option -->
                                                        <div
                                                            class="w-6/12 flex items-center bg-lightpink p-2.5 rounded-lg option accent-black">
                                                            <input id="otp-radio" type="radio" value="otp"
                                                                name="auth-method" class="w-4 h-4"
                                                                onclick="toggleInput()" />
                                                            <label for="otp-radio"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">OTP</label>
                                                        </div>

                                                        <!-- Password Radio Option -->
                                                        <div
                                                            class="w-6/12 flex items-center bg-lightpink p-2.5 rounded-lg option accent-black">
                                                            <input id="password-radio" type="radio" value="password"
                                                                name="auth-method" class="w-4 h-4"
                                                                onclick="toggleInput()" checked />
                                                            <label for="password-radio"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div>
                                                <!-- OTP Input Field -->
                                                <div id="otp-field" class="hidden">
                                                    <!-- <div> -->
                                                    <div class="flex justify-between items-center">
                                                        <label for="phone-input"
                                                            class="mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP
                                                            Verification Code</label>

                                                    </div>

                                                    <div class="flex space-x-2 mt-2">
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                        <input type="text" maxlength="1"
                                                            class="w-2/12 py-1.5 text-center text-xl rounded-lg"
                                                            required>
                                                    </div>
                                                    <div class="justify-between flex mt-2 flex-wrap">
                                                        <a href="#" class="text-blue text-nowrap">Verify Otp</a>
                                                        <span class="text-nowrap"> Resend OTP in 28 seconds.
                                                        </span>
                                                        <a href="#" class="underline text-nowrap">Resend OTP</a>
                                                    </div>

                                                    <!-- </div> -->
                                                </div>

                                                <!-- Password Input Field -->
                                                <div id="password-field">
                                                    <label for="password-input"
                                                        class="text-sm font-medium text-gray-900">Enter Password</label>
                                                    <input id="password-input" type="password"
                                                        class="mt-2 p-2.5 border border-gray-300 rounded-lg w-full  text-sm text-gray-900 bg-gray-50  border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                        placeholder="Enter Password" required>
                                                </div>

                                            </div>
                                            <div class="mb-2">
                                                <label for="phone-input"
                                                    class="text-sm font-medium text-gray-900 dark:text-white">Phone
                                                    Number</label>
                                                <div class="flex mt-2 hidden sm:flex">
                                                    <div class="flex items-center w-65">
                                                        <button id="dropdown-phone-button"
                                                            data-dropdown-toggle="dropdown-phone"
                                                            class="bg1 rounded-s-lg flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-s-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                                                            type="button">
                                                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2"
                                                                viewBox="0 0 20 15">
                                                                <rect width="19.6" height="14" y=".5" fill="#fff"
                                                                    rx="2" />
                                                                <mask id="a" style="mask-type: luminance" width="20"
                                                                    height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                                                    <rect width="19.6" height="14" y=".5" fill="#fff"
                                                                        rx="2" />
                                                                </mask>
                                                                <g mask="url(#a)">
                                                                    <path fill="#D02F44" fill-rule="evenodd"
                                                                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                                                        clip-rule="evenodd" />
                                                                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                                                    <g filter="url(#filter0_d_343_121520)">
                                                                        <path fill="url(#paint0_linear_343_121520)"
                                                                            fill-rule="evenodd"
                                                                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                                            clip-rule="evenodd" />
                                                                    </g>
                                                                </g>
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_343_121520"
                                                                        x1=".933" x2=".933" y1="1.433" y2="6.1"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#fff" />
                                                                        <stop offset="1" stop-color="#F0F0F0" />
                                                                    </linearGradient>
                                                                    <filter id="filter0_d_343_121520" width="6.533"
                                                                        height="5.667" x=".933" y="1.433"
                                                                        color-interpolation-filters="sRGB"
                                                                        filterUnits="userSpaceOnUse">
                                                                        <feFlood flood-opacity="0"
                                                                            result="BackgroundImageFix" />
                                                                        <feColorMatrix in="SourceAlpha"
                                                                            result="hardAlpha"
                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                        <feOffset dy="1" />
                                                                        <feColorMatrix
                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                        <feBlend in2="BackgroundImageFix"
                                                                            result="effect1_dropShadow_343_121520" />
                                                                        <feBlend in="SourceGraphic"
                                                                            in2="effect1_dropShadow_343_121520"
                                                                            result="shape" />
                                                                    </filter>
                                                                </defs>
                                                            </svg>
                                                            +1
                                                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 10 6">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="m1 1 4 4 4-4" />
                                                            </svg>
                                                        </button>
                                                        <div id="dropdown-phone"
                                                            class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                                aria-labelledby="dropdown-phone-button">
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg fill="none" aria-hidden="true"
                                                                                class="h-4 w-4 me-2"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#D02F44"
                                                                                        fill-rule="evenodd"
                                                                                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path fill="#46467F"
                                                                                        d="M0 .5h8.4v6.533H0z" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_343_121520)">
                                                                                        <path
                                                                                            fill="url(#paint0_linear_343_121520)"
                                                                                            fill-rule="evenodd"
                                                                                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        id="paint0_linear_343_121520"
                                                                                        x1=".933" x2=".933" y1="1.433"
                                                                                        y2="6.1"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#fff" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#F0F0F0" />
                                                                                    </linearGradient>
                                                                                    <filter id="filter0_d_343_121520"
                                                                                        width="6.533" height="5.667"
                                                                                        x=".933" y="1.433"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset dy="1" />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_343_121520" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_343_121520"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            United States (+1)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="h-4 w-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#0A17A7"
                                                                                        d="M0 .5h19.6v14H0z" />
                                                                                    <path fill="#fff"
                                                                                        fill-rule="evenodd"
                                                                                        d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path stroke="#DB1F35"
                                                                                        stroke-linecap="round"
                                                                                        stroke-width=".667"
                                                                                        d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                                                                                    <path fill="#E6273E"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                            </svg>
                                                                            United Kingdom (+44)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="h-4 w-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#0A17A7"
                                                                                        d="M0 .5h19.6v14H0z" />
                                                                                    <path fill="#fff" stroke="#fff"
                                                                                        stroke-width=".667"
                                                                                        d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                                                                                    <path
                                                                                        fill="url(#paint0_linear_374_135177)"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path
                                                                                        fill="url(#paint1_linear_374_135177)"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path fill="#fff"
                                                                                        fill-rule="evenodd"
                                                                                        d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        id="paint0_linear_374_135177"
                                                                                        x1="0" x2="0" y1=".5" y2="7.5"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#fff" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#F0F0F0" />
                                                                                    </linearGradient>
                                                                                    <linearGradient
                                                                                        id="paint1_linear_374_135177"
                                                                                        x1="0" x2="0" y1=".5" y2="7.033"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#FF2E3B" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#FC0D1B" />
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                            Australia (+61)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#262626"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 5.167h19.6V.5H0v4.667z"
                                                                                        clip-rule="evenodd" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_374_135180)">
                                                                                        <path fill="#F01515"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 9.833h19.6V5.167H0v4.666z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                    <g
                                                                                        filter="url(#filter1_d_374_135180)">
                                                                                        <path fill="#FFD521"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 14.5h19.6V9.833H0V14.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <filter id="filter0_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="5.167"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                    <filter id="filter1_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="9.833"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            Germany (+49)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.1" height="13.5" x=".25"
                                                                                    y=".75" fill="#fff" stroke="#F5F5F5"
                                                                                    stroke-width=".5" rx="1.75" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.1" height="13.5"
                                                                                        x=".25" y=".75" fill="#fff"
                                                                                        stroke="#fff" stroke-width=".5"
                                                                                        rx="1.75" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#F44653"
                                                                                        d="M13.067.5H19.6v14h-6.533z" />
                                                                                    <path fill="#1035BB"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 14.5h6.533V.5H0v14z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                            </svg>
                                                                            France (+33)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#262626"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 5.167h19.6V.5H0v4.667z"
                                                                                        clip-rule="evenodd" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_374_135180)">
                                                                                        <path fill="#F01515"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 9.833h19.6V5.167H0v4.666z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                    <g
                                                                                        filter="url(#filter1_d_374_135180)">
                                                                                        <path fill="#FFD521"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 14.5h19.6V9.833H0V14.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <filter id="filter0_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="5.167"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                    <filter id="filter1_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="9.833"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            Germany (+49)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="relative w-full">
                                                            <input type="text" id="phone-input"
                                                                aria-describedby="helper-text-explanation"
                                                                class="block pe-2 py-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                                placeholder="Enter Phone" required />
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="flex justify-end pe-3 w-35 items-center underline rounded-e-lg bg-lightgray">
                                                        <a href="#"> Change Phone</a>
                                                    </div>
                                                </div>
                                                <div class="mt-2 sm:hidden">
                                                    <div class="flex items-center">
                                                        <button id="dropdown-phone-button"
                                                            data-dropdown-toggle="dropdown-phone"
                                                            class="bg1 rounded-s-lg flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-s-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                                                            type="button">
                                                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2"
                                                                viewBox="0 0 20 15">
                                                                <rect width="19.6" height="14" y=".5" fill="#fff"
                                                                    rx="2" />
                                                                <mask id="a" style="mask-type: luminance" width="20"
                                                                    height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                                                    <rect width="19.6" height="14" y=".5" fill="#fff"
                                                                        rx="2" />
                                                                </mask>
                                                                <g mask="url(#a)">
                                                                    <path fill="#D02F44" fill-rule="evenodd"
                                                                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                                                        clip-rule="evenodd" />
                                                                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                                                    <g filter="url(#filter0_d_343_121520)">
                                                                        <path fill="url(#paint0_linear_343_121520)"
                                                                            fill-rule="evenodd"
                                                                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                                            clip-rule="evenodd" />
                                                                    </g>
                                                                </g>
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_343_121520"
                                                                        x1=".933" x2=".933" y1="1.433" y2="6.1"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#fff" />
                                                                        <stop offset="1" stop-color="#F0F0F0" />
                                                                    </linearGradient>
                                                                    <filter id="filter0_d_343_121520" width="6.533"
                                                                        height="5.667" x=".933" y="1.433"
                                                                        color-interpolation-filters="sRGB"
                                                                        filterUnits="userSpaceOnUse">
                                                                        <feFlood flood-opacity="0"
                                                                            result="BackgroundImageFix" />
                                                                        <feColorMatrix in="SourceAlpha"
                                                                            result="hardAlpha"
                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                        <feOffset dy="1" />
                                                                        <feColorMatrix
                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                        <feBlend in2="BackgroundImageFix"
                                                                            result="effect1_dropShadow_343_121520" />
                                                                        <feBlend in="SourceGraphic"
                                                                            in2="effect1_dropShadow_343_121520"
                                                                            result="shape" />
                                                                    </filter>
                                                                </defs>
                                                            </svg>
                                                            +1
                                                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 10 6">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="m1 1 4 4 4-4" />
                                                            </svg>
                                                        </button>
                                                        <div id="dropdown-phone"
                                                            class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                                aria-labelledby="dropdown-phone-button">
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg fill="none" aria-hidden="true"
                                                                                class="h-4 w-4 me-2"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#D02F44"
                                                                                        fill-rule="evenodd"
                                                                                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path fill="#46467F"
                                                                                        d="M0 .5h8.4v6.533H0z" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_343_121520)">
                                                                                        <path
                                                                                            fill="url(#paint0_linear_343_121520)"
                                                                                            fill-rule="evenodd"
                                                                                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        id="paint0_linear_343_121520"
                                                                                        x1=".933" x2=".933" y1="1.433"
                                                                                        y2="6.1"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#fff" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#F0F0F0" />
                                                                                    </linearGradient>
                                                                                    <filter id="filter0_d_343_121520"
                                                                                        width="6.533" height="5.667"
                                                                                        x=".933" y="1.433"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset dy="1" />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_343_121520" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_343_121520"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            United States (+1)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="h-4 w-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#0A17A7"
                                                                                        d="M0 .5h19.6v14H0z" />
                                                                                    <path fill="#fff"
                                                                                        fill-rule="evenodd"
                                                                                        d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path stroke="#DB1F35"
                                                                                        stroke-linecap="round"
                                                                                        stroke-width=".667"
                                                                                        d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                                                                                    <path fill="#E6273E"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                            </svg>
                                                                            United Kingdom (+44)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="h-4 w-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#0A17A7"
                                                                                        d="M0 .5h19.6v14H0z" />
                                                                                    <path fill="#fff" stroke="#fff"
                                                                                        stroke-width=".667"
                                                                                        d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                                                                                    <path
                                                                                        fill="url(#paint0_linear_374_135177)"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path
                                                                                        fill="url(#paint1_linear_374_135177)"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                                                                        clip-rule="evenodd" />
                                                                                    <path fill="#fff"
                                                                                        fill-rule="evenodd"
                                                                                        d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        id="paint0_linear_374_135177"
                                                                                        x1="0" x2="0" y1=".5" y2="7.5"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#fff" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#F0F0F0" />
                                                                                    </linearGradient>
                                                                                    <linearGradient
                                                                                        id="paint1_linear_374_135177"
                                                                                        x1="0" x2="0" y1=".5" y2="7.033"
                                                                                        gradientUnits="userSpaceOnUse">
                                                                                        <stop stop-color="#FF2E3B" />
                                                                                        <stop offset="1"
                                                                                            stop-color="#FC0D1B" />
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                            Australia (+61)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#262626"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 5.167h19.6V.5H0v4.667z"
                                                                                        clip-rule="evenodd" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_374_135180)">
                                                                                        <path fill="#F01515"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 9.833h19.6V5.167H0v4.666z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                    <g
                                                                                        filter="url(#filter1_d_374_135180)">
                                                                                        <path fill="#FFD521"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 14.5h19.6V9.833H0V14.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <filter id="filter0_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="5.167"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                    <filter id="filter1_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="9.833"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            Germany (+49)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.1" height="13.5" x=".25"
                                                                                    y=".75" fill="#fff" stroke="#F5F5F5"
                                                                                    stroke-width=".5" rx="1.75" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.1" height="13.5"
                                                                                        x=".25" y=".75" fill="#fff"
                                                                                        stroke="#fff" stroke-width=".5"
                                                                                        rx="1.75" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#F44653"
                                                                                        d="M13.067.5H19.6v14h-6.533z" />
                                                                                    <path fill="#1035BB"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 14.5h6.533V.5H0v14z"
                                                                                        clip-rule="evenodd" />
                                                                                </g>
                                                                            </svg>
                                                                            France (+33)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button"
                                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        role="menuitem">
                                                                        <span class="inline-flex items-center">
                                                                            <svg class="w-4 h-4 me-2" fill="none"
                                                                                viewBox="0 0 20 15">
                                                                                <rect width="19.6" height="14" y=".5"
                                                                                    fill="#fff" rx="2" />
                                                                                <mask id="a"
                                                                                    style="mask-type: luminance"
                                                                                    width="20" height="15" x="0" y="0"
                                                                                    maskUnits="userSpaceOnUse">
                                                                                    <rect width="19.6" height="14"
                                                                                        y=".5" fill="#fff" rx="2" />
                                                                                </mask>
                                                                                <g mask="url(#a)">
                                                                                    <path fill="#262626"
                                                                                        fill-rule="evenodd"
                                                                                        d="M0 5.167h19.6V.5H0v4.667z"
                                                                                        clip-rule="evenodd" />
                                                                                    <g
                                                                                        filter="url(#filter0_d_374_135180)">
                                                                                        <path fill="#F01515"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 9.833h19.6V5.167H0v4.666z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                    <g
                                                                                        filter="url(#filter1_d_374_135180)">
                                                                                        <path fill="#FFD521"
                                                                                            fill-rule="evenodd"
                                                                                            d="M0 14.5h19.6V9.833H0V14.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <filter id="filter0_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="5.167"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                    <filter id="filter1_d_374_135180"
                                                                                        width="19.6" height="4.667"
                                                                                        x="0" y="9.833"
                                                                                        color-interpolation-filters="sRGB"
                                                                                        filterUnits="userSpaceOnUse">
                                                                                        <feFlood flood-opacity="0"
                                                                                            result="BackgroundImageFix" />
                                                                                        <feColorMatrix in="SourceAlpha"
                                                                                            result="hardAlpha"
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                                                        <feOffset />
                                                                                        <feColorMatrix
                                                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                                                        <feBlend
                                                                                            in2="BackgroundImageFix"
                                                                                            result="effect1_dropShadow_374_135180" />
                                                                                        <feBlend in="SourceGraphic"
                                                                                            in2="effect1_dropShadow_374_135180"
                                                                                            result="shape" />
                                                                                    </filter>
                                                                                </defs>
                                                                            </svg>
                                                                            Germany (+49)
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="relative w-full">
                                                            <input type="text" id="phone-input"
                                                                aria-describedby="helper-text-explanation"
                                                                class="rounded-e-lg block pe-2 py-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                                placeholder="Enter Phone" required />
                                                        </div>
                                                    </div>

                                                    <div class="underline">
                                                        <a href="#"> Change Phone</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2">
                                                    <!-- WhatsApp Icon -->

                                                    <!-- Text -->
                                                    <span class="text-gray-800 font-medium flex items-center">Get
                                                        updates on <img src="../assets/images/whatsapp-icon.png"
                                                            width="8%" class="mx-2"> <span
                                                            class="text-green-500">WhatsApp</span></span>
                                                </div>

                                                <!-- Toggle Switch -->
                                                <label class="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" class="sr-only peer">
                                                    <div
                                                        class="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors">
                                                    </div>
                                                    <div
                                                        class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-4">
                                                    </div>
                                                </label>
                                            </div>

                                            <button type="submit"
                                                class="mt-4 text-white w-full main-btn hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                                                Continue
                                            </button>
                                            <div class="mt-3">
                                                <h3 class="font-semibold">
                                                    Why To Choose Logo Services?
                                                </h3>
                                                <div class="mt-2">
                                                    <ul>
                                                        <li class="flex items-center">
                                                            <img src="assets/images/icon1.svg" />
                                                            <p class="ms-2">Lowest Price Guaranteed</p>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <img src="assets/images/icon4.svg" />
                                                            <p class="ms-2">5 Star Rated Partners</p>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li class="flex items-center">
                                                            <img src="assets/images/icon2.svg" />
                                                            <p class="ms-2">Free Reschedule</p>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <img src="assets/images/icon3.svg" />
                                                            <p class="ms-2">Dedicates Customer Support</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>

                                        <!-- Success and error messages -->
                                        <div id="message3" class="mt-4 hidden text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button type="button" class="f-btn m-0 text-black rounded-lg px-3 sm:px-5 md:px-3 lg:px-5 py-2.5 fixed w-full bottom-0 z-10 bg-white shadow sm:hidden">
        Vendor Registration
    </button> -->
    </section>
    <!-- topbar end -->
</template>

<style scoped>
    @import '../assets/css/main.css';
</style>