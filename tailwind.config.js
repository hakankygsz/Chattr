/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'border-yellow-500', 'text-yellow-500', 'hover:bg-neutral-50',
    'border-blue-500', 'text-blue-500', 'hover:bg-neutral-50',
    'border-red-500', 'text-red-500', 'hover:bg-neutral-50',
  ],
}
