// @ts-check
const aspectRatio = require('@tailwindcss/aspect-ratio')
const daisyUI = require('daisyui')
const defaultTheme = require('tailwindcss/defaultTheme')
const formReset = require('@tailwindcss/forms')
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height')
const lineClamp = require('@tailwindcss/line-clamp')
const typography = require('@tailwindcss/typography')

const unsplashImages = require('tailwindcss-unsplash')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      dirty: ['dirty'],
    },
    extend: {
      colors: {
        brand: {
          base: '#777',
          red: '#842FE3',
          blue: '#F19F59',
          green: '#3E60D6',
          orange: '#2A5E65',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
    unsplashImages: {
      speaker: 'VVuRLhyTmXM',
    },
    unsplashResolutions: {
      default: null, // --- Allows maximum available resolution by default.
      xs: 480,
      sm: 720,
      md: 1280,
      lg: 1920,
      xl: 3840,
      '2xl': 7680,
    },
  },
  plugins: [
    aspectRatio,
    daisyUI,
    formReset,
    iOSHeight,
    lineClamp,
    typography,
    unsplashImages,
  ],
  daisyui: {
    themes: false,
    logs: false,
  },
}
