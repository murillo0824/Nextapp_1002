module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max':'640px'},
      'md': {'min':'1023px','max':'500px'},
      'lg': {'min':'1279px','max':'1024px'},
      'xl': {'max':'1280px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
