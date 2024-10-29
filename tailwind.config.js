/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}", // Если ваш основной файл - App.tsx
		"./app/**/*.{js,jsx,ts,tsx}", // Укажите пути к вашим компонентам
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
