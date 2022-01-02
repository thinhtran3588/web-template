const fs = require('fs/promises');
const tailwindcssColors = require('tailwindcss/colors');

const mainColorVariant = '500';
const focusColorVariant = '600';
const colors = [
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
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
];

(async () => {
  const daisyUiThemes = {};
  const themes = [];
  colors.forEach((primaryColor, index) => {
    const secondaryColor = colors[(index + 3) % colors.length];
    const accentColor = colors[(index + 10) % colors.length];
    const theme = {
      name: `theme-${primaryColor}`,
      primary: tailwindcssColors[primaryColor][mainColorVariant],
      'primary-focus': tailwindcssColors[primaryColor][focusColorVariant],
      'primary-content': '#ffffff',
      secondary: tailwindcssColors[secondaryColor][mainColorVariant],
      'secondary-focus': tailwindcssColors[secondaryColor][focusColorVariant],
      'secondary-content': '#ffffff',
      accent: tailwindcssColors[accentColor][mainColorVariant],
      'accent-focus': tailwindcssColors[accentColor][focusColorVariant],
      'accent-content': '#ffffff',
      neutral: '#3d4451',
      'neutral-focus': '#2a2e37',
      'neutral-content': '#ffffff',
      'base-100': '#ffffff',
      'base-200': '#f9fafb',
      'base-300': '#d1d5db',
      'base-content': '#1f2937',
      info: '#3b82f6',
      success: '#22c55e',
      warning: '#f97316',
      error: '#ef4444',
    };
    daisyUiThemes[`theme-${primaryColor}`] = theme;
    themes.push(theme);
  });
  await fs.writeFile('./tailwind.daisy-ui-themes.json', JSON.stringify(daisyUiThemes));
  await fs.writeFile('./src/core/themes.json', JSON.stringify(themes));
})();
