/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ["./pages/**/*.{ts,tsx,js,jsx}", "./public/**/*.html"],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
