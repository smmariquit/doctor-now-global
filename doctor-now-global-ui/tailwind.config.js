// doctor-now-global-ui/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'var(--dn-brand-light)',
          DEFAULT: 'var(--dn-brand)',
          mid: 'var(--dn-brand-mid)',
          dark: 'var(--dn-brand-dark)',
        },
        accent: {
          DEFAULT: 'var(--dn-accent)',
          hover: 'var(--dn-accent-hover)',
        },
      },
      fontFamily: {
        sans: ['Lexend', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    },
  },
  plugins: [],
}