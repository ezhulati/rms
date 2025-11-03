/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,astro,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Modern Essence Design System
        'brand': {
          // Primary: Trust Blue - Main actions, links, primary buttons
          primary: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6', // Base color
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
            950: '#172554',
          },
          // Secondary: Wisdom Purple - Secondary actions, highlights, badges
          secondary: {
            50: '#F5F3F7',
            100: '#EBE7EF',
            200: '#D7CFE0',
            300: '#C3B7D0',
            400: '#AF9FC1',
            500: '#5F4B8B', // Base color
            600: '#4C3C6F',
            700: '#3F3159',
            800: '#322644',
            900: '#251B2F',
            950: '#1A1322',
          },
          // Accent: Healing Teal - Success states, positive feedback, growth indicators
          accent: {
            50: '#F0FDFB',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#4ECDC4', // Base color
            500: '#2DD4BF',
            600: '#14B8A6',
            700: '#0D9488',
            800: '#0F766E',
            900: '#115E59',
            950: '#042F2E',
          },
          // Coral: Warm Attention - Errors, warnings, important callouts
          coral: {
            50: '#FFF5F5',
            100: '#FFE3E3',
            200: '#FFC9C9',
            300: '#FFA8A8',
            400: '#FF8787',
            500: '#FF6B6B', // Base color
            600: '#FA5252',
            700: '#F03E3E',
            800: '#E03131',
            900: '#C92A2A',
            950: '#7D1A1A',
          },
        },
        // Neutral palette for backgrounds, text, borders
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Legacy support (keeping for backwards compatibility)
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
        // Modern, approachable fonts - Inter + Lora
        'nav': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'accent': ['Lora', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Consolas', 'Monaco', 'monospace'],
        // Legacy support
        'serif': ['Lora', 'Georgia', 'serif'],
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