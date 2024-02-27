/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        ac: {
          button: {
            // Light mode
            50: '#1A1B24',          // Primary background
            100: '#ffffff',         // Primary text
            150: '#697488',         // Secondary text
            200: '#1A1B24',         // Secondary text :hover

            // Dark mode
            300: '#ffffff',
            350: '#161921',
            400: '#BAC2D2',
            450: '#ffffff',
          },
          gray: {
            // Light mode
            50: '#F7F9FB',
            100: '#ECEEF1',
            150: '#D6DBE0',
            200: '#697488',
            250: '#5F6777',
            300: '#424551',
            350: '#252832',
            400: '#1A1B24',

            // Dark mode
            450: '#D5DCE9',
            500: '#BAC2D2',
            550: '#9FA9BB',
            600: '#858FA2',
            650: '#697488',
            700: '#5F6777',
            750: '#414856',
            800: '#252832',
            850: '#22262F',
            900: '#1E2129',
            950: '#161921',
          },
        },
      },
    }
  },
  plugins: [],
}
