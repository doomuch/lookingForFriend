/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    },
    colors: {
      primary: '#FFFDF7',
      secondary: '#353534',
      accent: '#16B84D'
    },
    fontFamily: {
      sans: ['Inter'],
      serif: ['TurquoiseSansRegular', 'Merriweather'],
      inline: ['TurquoiseSansInline', 'Merriweather']

    }
  },
  plugins: [],
}

