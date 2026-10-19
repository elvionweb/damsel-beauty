/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1b1114',
        cream: '#fbf4ef',
        blush: '#f6e3e3',
        rose: { DEFAULT: '#b5446e', deep: '#8d2f52', soft: '#e9b7c9' },
        gold: { DEFAULT: '#c9a050', light: '#e8cf93' },
        muted: '#6e5a60',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '.55' }, '100%': { transform: 'scale(1.9)', opacity: '0' } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 3.5s ease-in-out infinite',
        pulseRing: 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
