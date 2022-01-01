const fs = require('fs/promises');

const COLORS = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'gray',
];

/** add templates which are used in source code to generate tailwindcss class names */
(async () => {
  const classes = [];
  [
    'bg-{color}-500',
    'dark:bg-{color}-400',
    'ring-{color}-500',
    'dark:ring-{color}-400',
    'from-{color}-500',
    'dark:from-{color}-400',
    'to-{color}-500',
    'dark:to-{color}-400',
    'text-{color}-500',
    'dark:text-{color}-400',
    'border-{color}-500',
    'dark:border-{color}-400',
    'hover:bg-{color}-600',
    'dark:hover:bg-{color}-500',
    'hover:border-{color}-600',
    'dark:hover:border-{color}-500',
    'hover:text-{color}-600',
    'dark:hover:text-{color}-500',
    'checked:bg-{color}-500',
    'dark:checked:bg-{color}-400',
    'hover:checked:bg-{color}-600',
    'dark:hover:checked:bg-{color}-500',
    'checked:focus:bg-{color}-500',
    'dark:checked:focus:bg-{color}-400',
    'focus:ring-{color}-500',
    'dark:focus:ring-{color}-400',
    'checked:focus:ring-{color}-500',
    'dark:checked:focus:ring-{color}-400',
    'focus:border-{color}-500',
    'dark:focus:border-{color}-400',
  ].forEach((template) => {
    COLORS.forEach((color) => {
      const cssClass = template.replace('{color}', color);
      classes.push(cssClass);
    });
  });
  await fs.writeFile('./src/tailwind-color-classes.txt', `${classes.join(' ')}`);
})();
