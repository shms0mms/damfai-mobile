/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")], // Убедись, что здесь указан путь "nativewind/preset"
};
