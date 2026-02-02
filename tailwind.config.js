/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97706',  // Warm orange
          light: '#F59E0B',
          dark: '#B45309'
        },
        brown: {
          DEFAULT: '#78350F',  // Rich brown
          light: '#92400E',
          dark: '#451A03'
        },
        eco: {
          DEFAULT: '#059669',  // Eco green
          light: '#10B981',
          dark: '#047857'
        },
        dark: {
          DEFAULT: '#1C1917',  // Warm dark (stone-900)
          light: '#292524'    // stone-800
        },
        soft: {
          DEFAULT: '#FAFAF9',  // Warm white (stone-50)
          dark: '#F5F5F4'      // stone-100
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}
