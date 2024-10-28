/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#000000',
                    surface: '#121212',
                    border: '#2C2C2C',
                    text: {
                        primary: '#E0E0E0',
                        secondary: '#B0B0B0'
                    },
                    accent: {
                        primary: '#BB86FC',
                        secondary: '#03DAC5',
                        tertiary: '#FFB74D'
                    },
                    success: '#00E676',
                    error: '#CF6679'
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}