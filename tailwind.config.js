/** @type {import('tailwindcss').Config} */
export default {
  //purge: ['./app/pages/**/*.vue', './app/layouts/**/*.vue', './app/components/**/*.vue'],
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

