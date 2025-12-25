/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                violet: {
                    main: '#4B0082',   // Deep Violet / Indigo
                    light: '#E6D9FF',  // Light Lavender
                    neon: '#9D4EDD',   // Neon Violet
                    dark: '#2e004f',   // Darker shade
                    glass: 'rgba(255, 255, 255, 0.1)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
