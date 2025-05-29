/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kosugi'],
            },
            fontSize: {
                '2xs': '0.625rem', 
                xs: '0.75rem', 
                sm: '0.875rem', 
                base: '1rem', 
                lg: '1.125rem', 
                xl: '1.25rem', 
                '2xl': '1.5rem', 
                '3xl': '1.875rem', 
                '4xl': '2.25rem', 
            },
            colors: {
                primary: {
                    DEFAULT: '#0D0D0D',
                    light: '#050505',
                    dark: '#1A1A1A',
                },
                secondary: {
                    DEFAULT: '#E31616',
                    dark: '#B01010',
                    light: '#F03B3B',
                },
            },
        },
    },
    plugins: [],
};
