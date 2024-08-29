/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Aggiungi questo per scansionare i file nella directory 'app'
    './src/components/**/*.{js,ts,jsx,tsx}', // Aggiungi questo per scansionare i file nella directory 'components'
    './public/**/*.html', // Aggiungi questo se usi file HTML nella cartella 'public'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
