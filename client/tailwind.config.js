/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 10px #565637',
      },
      colors: {
        primary: '#00FCED',
        secondary: '#92EEE8',
      },
      fontFamily: {
        primary: 'Quicksand',
      },
      screens: {
        '4xl': '1801px',
        '3xl': '1751px',
        'mmd': '901px',
        'msm': '631px',
        'gsm': '531px',
        'buttonsm': '441px',
        'vsm': '406px',
        'formsm': '351px',
        'vvsm': '100px',
      },
      animation: {
        'spin': 'spin 2s linear infinite',
      }
    }
  },
  plugins: [],
}