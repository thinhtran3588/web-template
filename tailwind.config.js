const themes = require('./tailwind.daisy-ui-themes.json');

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
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
      minWidth: {
        2: '2rem',
        4: '4rem',
        6: '6rem',
        8: '8rem',
        10: '10rem',
        12: '12rem',
      },
      maxWidth: {
        2: '2rem',
        4: '4rem',
        6: '6rem',
        8: '8rem',
        10: '10rem',
        12: '12rem',
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [themes],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
