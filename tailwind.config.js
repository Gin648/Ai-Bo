/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px'
    },
    extend: {
      colors: {
        customPrimary: {
          50: '#E8FDFF ',
          100: '#C4FAFF ',
          200: '#98F6FF ',
          300: '#5CEFFF ',
          400: '#30F8FF',
          500: '#00E4F5',
          600: '#00C4D6',
          700: '#009EAD',
          800: '#007C89',
          900: '#005661',
          950: '#00333A'
        },
        black: '#000',
        white: '#fff',
        transparent: 'transparent',
        currentColor: 'currentColor'
      },
      fontFamily: {
        inter: ['Inter']
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    }
  }
}
