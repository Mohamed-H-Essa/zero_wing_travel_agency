/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#04323D', // Dark Teal
          secondary: '#204E5A', // Dark Teal 2
          accent: '#B19385', // Dusty Taupe
          neutral: '#8EA7B0', // Cool Steel
          dark: '#191B1F', // Carbon Black
          // Legacy support (mapping to new palette)
          gold: '#B19385',
          gray: '#8EA7B0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-zoom': 'subtleZoom 20s infinite alternate',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
