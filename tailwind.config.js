module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}', './src/tailwind-color-classes.txt'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      minHeight: {
        2: '2rem',
        4: '4rem',
        6: '6rem',
        8: '8rem',
        10: '10rem',
        12: '12rem',
      },
      maxHeight: {
        2: '2rem',
        4: '4rem',
        6: '6rem',
        8: '8rem',
        10: '10rem',
        12: '12rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
