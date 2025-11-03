/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,astro,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          primary: '#3ECF8E',
          secondary: '#00C8FF',
        },
        'sb': {
          'dark': {
            900: '#1F1F1F',
            800: '#2E2E2E',
            700: '#3E3E3E',
            600: '#4D4D4D',
            500: '#5C5C5C',
            400: '#6B6B6B',
            300: '#7A7A7A',
            200: '#898989',
            100: '#989898',
          },
          'gray': {
            900: '#A7A7A7',
            800: '#B6B6B6',
            700: '#C5C5C5',
            600: '#D4D4D4',
            500: '#E3E3E3',
            400: '#F2F2F2',
            300: '#F7F7F7',
            200: '#FBFBFB',
            100: '#FCFCFC',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'sb': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.04)',
        'sb-hover': '0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 24px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'sb': '6px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)', 
        'safe-right': 'env(safe-area-inset-right)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'ultra-wide': '21/9',
      },
    },
  },
  plugins: [],
};