/* eslint-disable max-len */
/* import CONSTANTS from '@core/constants.json';
console.log(
  ['text', 'bg', 'from', 'to', 'ring']
    .map((type) =>
      [100, 200, 300, 400, 500, 600, 700, 800, 900]
        .map((variant) => CONSTANTS.COLORS.map((color) => `${type}-${color}-${variant}`).join(' '))
        .join(' '),
    )
    .join(' '),
);

text-red-100 text-orange-100 text-amber-100 text-yellow-100 text-lime-100 text-green-100 text-emerald-100 text-teal-100 text-cyan-100 text-sky-100 text-blue-100 text-indigo-100 text-violet-100 text-purple-100 text-fuchsia-100 text-pink-100 text-rose-100 text-red-200 text-orange-200 text-amber-200 text-yellow-200 text-lime-200 text-green-200 text-emerald-200 text-teal-200 text-cyan-200 text-sky-200 text-blue-200 text-indigo-200 text-violet-200 text-purple-200 text-fuchsia-200 text-pink-200 text-rose-200 text-red-300 text-orange-300 text-amber-300 text-yellow-300 text-lime-300 text-green-300 text-emerald-300 text-teal-300 text-cyan-300 text-sky-300 text-blue-300 text-indigo-300 text-violet-300 text-purple-300 text-fuchsia-300 text-pink-300 text-rose-300 text-red-400 text-orange-400 text-amber-400 text-yellow-400 text-lime-400 text-green-400 text-emerald-400 text-teal-400 text-cyan-400 text-sky-400 text-blue-400 text-indigo-400 text-violet-400 text-purple-400 text-fuchsia-400 text-pink-400 text-rose-400 text-red-500 text-orange-500 text-amber-500 text-yellow-500 text-lime-500 text-green-500 text-emerald-500 text-teal-500 text-cyan-500 text-sky-500 text-blue-500 text-indigo-500 text-violet-500 text-purple-500 text-fuchsia-500 text-pink-500 text-rose-500 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600 text-red-700 text-orange-700 text-amber-700 text-yellow-700 text-lime-700 text-green-700 text-emerald-700 text-teal-700 text-cyan-700 text-sky-700 text-blue-700 text-indigo-700 text-violet-700 text-purple-700 text-fuchsia-700 text-pink-700 text-rose-700 text-red-800 text-orange-800 text-amber-800 text-yellow-800 text-lime-800 text-green-800 text-emerald-800 text-teal-800 text-cyan-800 text-sky-800 text-blue-800 text-indigo-800 text-violet-800 text-purple-800 text-fuchsia-800 text-pink-800 text-rose-800 text-red-900 text-orange-900 text-amber-900 text-yellow-900 text-lime-900 text-green-900 text-emerald-900 text-teal-900 text-cyan-900 text-sky-900 text-blue-900 text-indigo-900 text-violet-900 text-purple-900 text-fuchsia-900 text-pink-900 text-rose-900 bg-red-100 bg-orange-100 bg-amber-100 bg-yellow-100 bg-lime-100 bg-green-100 bg-emerald-100 bg-teal-100 bg-cyan-100 bg-sky-100 bg-blue-100 bg-indigo-100 bg-violet-100 bg-purple-100 bg-fuchsia-100 bg-pink-100 bg-rose-100 bg-red-200 bg-orange-200 bg-amber-200 bg-yellow-200 bg-lime-200 bg-green-200 bg-emerald-200 bg-teal-200 bg-cyan-200 bg-sky-200 bg-blue-200 bg-indigo-200 bg-violet-200 bg-purple-200 bg-fuchsia-200 bg-pink-200 bg-rose-200 bg-red-300 bg-orange-300 bg-amber-300 bg-yellow-300 bg-lime-300 bg-green-300 bg-emerald-300 bg-teal-300 bg-cyan-300 bg-sky-300 bg-blue-300 bg-indigo-300 bg-violet-300 bg-purple-300 bg-fuchsia-300 bg-pink-300 bg-rose-300 bg-red-400 bg-orange-400 bg-amber-400 bg-yellow-400 bg-lime-400 bg-green-400 bg-emerald-400 bg-teal-400 bg-cyan-400 bg-sky-400 bg-blue-400 bg-indigo-400 bg-violet-400 bg-purple-400 bg-fuchsia-400 bg-pink-400 bg-rose-400 bg-red-500 bg-orange-500 bg-amber-500 bg-yellow-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-cyan-500 bg-sky-500 bg-blue-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 bg-rose-500 bg-red-600 bg-orange-600 bg-amber-600 bg-yellow-600 bg-lime-600 bg-green-600 bg-emerald-600 bg-teal-600 bg-cyan-600 bg-sky-600 bg-blue-600 bg-indigo-600 bg-violet-600 bg-purple-600 bg-fuchsia-600 bg-pink-600 bg-rose-600 bg-red-700 bg-orange-700 bg-amber-700 bg-yellow-700 bg-lime-700 bg-green-700 bg-emerald-700 bg-teal-700 bg-cyan-700 bg-sky-700 bg-blue-700 bg-indigo-700 bg-violet-700 bg-purple-700 bg-fuchsia-700 bg-pink-700 bg-rose-700 bg-red-800 bg-orange-800 bg-amber-800 bg-yellow-800 bg-lime-800 bg-green-800 bg-emerald-800 bg-teal-800 bg-cyan-800 bg-sky-800 bg-blue-800 bg-indigo-800 bg-violet-800 bg-purple-800 bg-fuchsia-800 bg-pink-800 bg-rose-800 bg-red-900 bg-orange-900 bg-amber-900 bg-yellow-900 bg-lime-900 bg-green-900 bg-emerald-900 bg-teal-900 bg-cyan-900 bg-sky-900 bg-blue-900 bg-indigo-900 bg-violet-900 bg-purple-900 bg-fuchsia-900 bg-pink-900 bg-rose-900 from-red-100 from-orange-100 from-amber-100 from-yellow-100 from-lime-100 from-green-100 from-emerald-100 from-teal-100 from-cyan-100 from-sky-100 from-blue-100 from-indigo-100 from-violet-100 from-purple-100 from-fuchsia-100 from-pink-100 from-rose-100 from-red-200 from-orange-200 from-amber-200 from-yellow-200 from-lime-200 from-green-200 from-emerald-200 from-teal-200 from-cyan-200 from-sky-200 from-blue-200 from-indigo-200 from-violet-200 from-purple-200 from-fuchsia-200 from-pink-200 from-rose-200 from-red-300 from-orange-300 from-amber-300 from-yellow-300 from-lime-300 from-green-300 from-emerald-300 from-teal-300 from-cyan-300 from-sky-300 from-blue-300 from-indigo-300 from-violet-300 from-purple-300 from-fuchsia-300 from-pink-300 from-rose-300 from-red-400 from-orange-400 from-amber-400 from-yellow-400 from-lime-400 from-green-400 from-emerald-400 from-teal-400 from-cyan-400 from-sky-400 from-blue-400 from-indigo-400 from-violet-400 from-purple-400 from-fuchsia-400 from-pink-400 from-rose-400 from-red-500 from-orange-500 from-amber-500 from-yellow-500 from-lime-500 from-green-500 from-emerald-500 from-teal-500 from-cyan-500 from-sky-500 from-blue-500 from-indigo-500 from-violet-500 from-purple-500 from-fuchsia-500 from-pink-500 from-rose-500 from-red-600 from-orange-600 from-amber-600 from-yellow-600 from-lime-600 from-green-600 from-emerald-600 from-teal-600 from-cyan-600 from-sky-600 from-blue-600 from-indigo-600 from-violet-600 from-purple-600 from-fuchsia-600 from-pink-600 from-rose-600 from-red-700 from-orange-700 from-amber-700 from-yellow-700 from-lime-700 from-green-700 from-emerald-700 from-teal-700 from-cyan-700 from-sky-700 from-blue-700 from-indigo-700 from-violet-700 from-purple-700 from-fuchsia-700 from-pink-700 from-rose-700 from-red-800 from-orange-800 from-amber-800 from-yellow-800 from-lime-800 from-green-800 from-emerald-800 from-teal-800 from-cyan-800 from-sky-800 from-blue-800 from-indigo-800 from-violet-800 from-purple-800 from-fuchsia-800 from-pink-800 from-rose-800 from-red-900 from-orange-900 from-amber-900 from-yellow-900 from-lime-900 from-green-900 from-emerald-900 from-teal-900 from-cyan-900 from-sky-900 from-blue-900 from-indigo-900 from-violet-900 from-purple-900 from-fuchsia-900 from-pink-900 from-rose-900 to-red-100 to-orange-100 to-amber-100 to-yellow-100 to-lime-100 to-green-100 to-emerald-100 to-teal-100 to-cyan-100 to-sky-100 to-blue-100 to-indigo-100 to-violet-100 to-purple-100 to-fuchsia-100 to-pink-100 to-rose-100 to-red-200 to-orange-200 to-amber-200 to-yellow-200 to-lime-200 to-green-200 to-emerald-200 to-teal-200 to-cyan-200 to-sky-200 to-blue-200 to-indigo-200 to-violet-200 to-purple-200 to-fuchsia-200 to-pink-200 to-rose-200 to-red-300 to-orange-300 to-amber-300 to-yellow-300 to-lime-300 to-green-300 to-emerald-300 to-teal-300 to-cyan-300 to-sky-300 to-blue-300 to-indigo-300 to-violet-300 to-purple-300 to-fuchsia-300 to-pink-300 to-rose-300 to-red-400 to-orange-400 to-amber-400 to-yellow-400 to-lime-400 to-green-400 to-emerald-400 to-teal-400 to-cyan-400 to-sky-400 to-blue-400 to-indigo-400 to-violet-400 to-purple-400 to-fuchsia-400 to-pink-400 to-rose-400 to-red-500 to-orange-500 to-amber-500 to-yellow-500 to-lime-500 to-green-500 to-emerald-500 to-teal-500 to-cyan-500 to-sky-500 to-blue-500 to-indigo-500 to-violet-500 to-purple-500 to-fuchsia-500 to-pink-500 to-rose-500 to-red-600 to-orange-600 to-amber-600 to-yellow-600 to-lime-600 to-green-600 to-emerald-600 to-teal-600 to-cyan-600 to-sky-600 to-blue-600 to-indigo-600 to-violet-600 to-purple-600 to-fuchsia-600 to-pink-600 to-rose-600 to-red-700 to-orange-700 to-amber-700 to-yellow-700 to-lime-700 to-green-700 to-emerald-700 to-teal-700 to-cyan-700 to-sky-700 to-blue-700 to-indigo-700 to-violet-700 to-purple-700 to-fuchsia-700 to-pink-700 to-rose-700 to-red-800 to-orange-800 to-amber-800 to-yellow-800 to-lime-800 to-green-800 to-emerald-800 to-teal-800 to-cyan-800 to-sky-800 to-blue-800 to-indigo-800 to-violet-800 to-purple-800 to-fuchsia-800 to-pink-800 to-rose-800 to-red-900 to-orange-900 to-amber-900 to-yellow-900 to-lime-900 to-green-900 to-emerald-900 to-teal-900 to-cyan-900 to-sky-900 to-blue-900 to-indigo-900 to-violet-900 to-purple-900 to-fuchsia-900 to-pink-900 to-rose-900 ring-red-100 ring-orange-100 ring-amber-100 ring-yellow-100 ring-lime-100 ring-green-100 ring-emerald-100 ring-teal-100 ring-cyan-100 ring-sky-100 ring-blue-100 ring-indigo-100 ring-violet-100 ring-purple-100 ring-fuchsia-100 ring-pink-100 ring-rose-100 ring-red-200 ring-orange-200 ring-amber-200 ring-yellow-200 ring-lime-200 ring-green-200 ring-emerald-200 ring-teal-200 ring-cyan-200 ring-sky-200 ring-blue-200 ring-indigo-200 ring-violet-200 ring-purple-200 ring-fuchsia-200 ring-pink-200 ring-rose-200 ring-red-300 ring-orange-300 ring-amber-300 ring-yellow-300 ring-lime-300 ring-green-300 ring-emerald-300 ring-teal-300 ring-cyan-300 ring-sky-300 ring-blue-300 ring-indigo-300 ring-violet-300 ring-purple-300 ring-fuchsia-300 ring-pink-300 ring-rose-300 ring-red-400 ring-orange-400 ring-amber-400 ring-yellow-400 ring-lime-400 ring-green-400 ring-emerald-400 ring-teal-400 ring-cyan-400 ring-sky-400 ring-blue-400 ring-indigo-400 ring-violet-400 ring-purple-400 ring-fuchsia-400 ring-pink-400 ring-rose-400 ring-red-500 ring-orange-500 ring-amber-500 ring-yellow-500 ring-lime-500 ring-green-500 ring-emerald-500 ring-teal-500 ring-cyan-500 ring-sky-500 ring-blue-500 ring-indigo-500 ring-violet-500 ring-purple-500 ring-fuchsia-500 ring-pink-500 ring-rose-500 ring-red-600 ring-orange-600 ring-amber-600 ring-yellow-600 ring-lime-600 ring-green-600 ring-emerald-600 ring-teal-600 ring-cyan-600 ring-sky-600 ring-blue-600 ring-indigo-600 ring-violet-600 ring-purple-600 ring-fuchsia-600 ring-pink-600 ring-rose-600 ring-red-700 ring-orange-700 ring-amber-700 ring-yellow-700 ring-lime-700 ring-green-700 ring-emerald-700 ring-teal-700 ring-cyan-700 ring-sky-700 ring-blue-700 ring-indigo-700 ring-violet-700 ring-purple-700 ring-fuchsia-700 ring-pink-700 ring-rose-700 ring-red-800 ring-orange-800 ring-amber-800 ring-yellow-800 ring-lime-800 ring-green-800 ring-emerald-800 ring-teal-800 ring-cyan-800 ring-sky-800 ring-blue-800 ring-indigo-800 ring-violet-800 ring-purple-800 ring-fuchsia-800 ring-pink-800 ring-rose-800 ring-red-900 ring-orange-900 ring-amber-900 ring-yellow-900 ring-lime-900 ring-green-900 ring-emerald-900 ring-teal-900 ring-cyan-900 ring-sky-900 ring-blue-900 ring-indigo-900 ring-violet-900 ring-purple-900 ring-fuchsia-900 ring-pink-900 ring-rose-900
event - compiled successfully
text-red-100 text-orange-100 text-amber-100 text-yellow-100 text-lime-100 text-green-100 text-emerald-100 text-teal-100 text-cyan-100 text-sky-100 text-blue-100 text-indigo-100 text-violet-100 text-purple-100 text-fuchsia-100 text-pink-100 text-rose-100 text-red-200 text-orange-200 text-amber-200 text-yellow-200 text-lime-200 text-green-200 text-emerald-200 text-teal-200 text-cyan-200 text-sky-200 text-blue-200 text-indigo-200 text-violet-200 text-purple-200 text-fuchsia-200 text-pink-200 text-rose-200 text-red-300 text-orange-300 text-amber-300 text-yellow-300 text-lime-300 text-green-300 text-emerald-300 text-teal-300 text-cyan-300 text-sky-300 text-blue-300 text-indigo-300 text-violet-300 text-purple-300 text-fuchsia-300 text-pink-300 text-rose-300 text-red-400 text-orange-400 text-amber-400 text-yellow-400 text-lime-400 text-green-400 text-emerald-400 text-teal-400 text-cyan-400 text-sky-400 text-blue-400 text-indigo-400 text-violet-400 text-purple-400 text-fuchsia-400 text-pink-400 text-rose-400 text-red-500 text-orange-500 text-amber-500 text-yellow-500 text-lime-500 text-green-500 text-emerald-500 text-teal-500 text-cyan-500 text-sky-500 text-blue-500 text-indigo-500 text-violet-500 text-purple-500 text-fuchsia-500 text-pink-500 text-rose-500 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600 text-red-700 text-orange-700 text-amber-700 text-yellow-700 text-lime-700 text-green-700 text-emerald-700 text-teal-700 text-cyan-700 text-sky-700 text-blue-700 text-indigo-700 text-violet-700 text-purple-700 text-fuchsia-700 text-pink-700 text-rose-700 text-red-800 text-orange-800 text-amber-800 text-yellow-800 text-lime-800 text-green-800 text-emerald-800 text-teal-800 text-cyan-800 text-sky-800 text-blue-800 text-indigo-800 text-violet-800 text-purple-800 text-fuchsia-800 text-pink-800 text-rose-800 text-red-900 text-orange-900 text-amber-900 text-yellow-900 text-lime-900 text-green-900 text-emerald-900 text-teal-900 text-cyan-900 text-sky-900 text-blue-900 text-indigo-900 text-violet-900 text-purple-900 text-fuchsia-900 text-pink-900 text-rose-900 bg-red-100 bg-orange-100 bg-amber-100 bg-yellow-100 bg-lime-100 bg-green-100 bg-emerald-100 bg-teal-100 bg-cyan-100 bg-sky-100 bg-blue-100 bg-indigo-100 bg-violet-100 bg-purple-100 bg-fuchsia-100 bg-pink-100 bg-rose-100 bg-red-200 bg-orange-200 bg-amber-200 bg-yellow-200 bg-lime-200 bg-green-200 bg-emerald-200 bg-teal-200 bg-cyan-200 bg-sky-200 bg-blue-200 bg-indigo-200 bg-violet-200 bg-purple-200 bg-fuchsia-200 bg-pink-200 bg-rose-200 bg-red-300 bg-orange-300 bg-amber-300 bg-yellow-300 bg-lime-300 bg-green-300 bg-emerald-300 bg-teal-300 bg-cyan-300 bg-sky-300 bg-blue-300 bg-indigo-300 bg-violet-300 bg-purple-300 bg-fuchsia-300 bg-pink-300 bg-rose-300 bg-red-400 bg-orange-400 bg-amber-400 bg-yellow-400 bg-lime-400 bg-green-400 bg-emerald-400 bg-teal-400 bg-cyan-400 bg-sky-400 bg-blue-400 bg-indigo-400 bg-violet-400 bg-purple-400 bg-fuchsia-400 bg-pink-400 bg-rose-400 bg-red-500 bg-orange-500 bg-amber-500 bg-yellow-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-cyan-500 bg-sky-500 bg-blue-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 bg-rose-500 bg-red-600 bg-orange-600 bg-amber-600 bg-yellow-600 bg-lime-600 bg-green-600 bg-emerald-600 bg-teal-600 bg-cyan-600 bg-sky-600 bg-blue-600 bg-indigo-600 bg-violet-600 bg-purple-600 bg-fuchsia-600 bg-pink-600 bg-rose-600 bg-red-700 bg-orange-700 bg-amber-700 bg-yellow-700 bg-lime-700 bg-green-700 bg-emerald-700 bg-teal-700 bg-cyan-700 bg-sky-700 bg-blue-700 bg-indigo-700 bg-violet-700 bg-purple-700 bg-fuchsia-700 bg-pink-700 bg-rose-700 bg-red-800 bg-orange-800 bg-amber-800 bg-yellow-800 bg-lime-800 bg-green-800 bg-emerald-800 bg-teal-800 bg-cyan-800 bg-sky-800 bg-blue-800 bg-indigo-800 bg-violet-800 bg-purple-800 bg-fuchsia-800 bg-pink-800 bg-rose-800 bg-red-900 bg-orange-900 bg-amber-900 bg-yellow-900 bg-lime-900 bg-green-900 bg-emerald-900 bg-teal-900 bg-cyan-900 bg-sky-900 bg-blue-900 bg-indigo-900 bg-violet-900 bg-purple-900 bg-fuchsia-900 bg-pink-900 bg-rose-900 from-red-100 from-orange-100 from-amber-100 from-yellow-100 from-lime-100 from-green-100 from-emerald-100 from-teal-100 from-cyan-100 from-sky-100 from-blue-100 from-indigo-100 from-violet-100 from-purple-100 from-fuchsia-100 from-pink-100 from-rose-100 from-red-200 from-orange-200 from-amber-200 from-yellow-200 from-lime-200 from-green-200 from-emerald-200 from-teal-200 from-cyan-200 from-sky-200 from-blue-200 from-indigo-200 from-violet-200 from-purple-200 from-fuchsia-200 from-pink-200 from-rose-200 from-red-300 from-orange-300 from-amber-300 from-yellow-300 from-lime-300 from-green-300 from-emerald-300 from-teal-300 from-cyan-300 from-sky-300 from-blue-300 from-indigo-300 from-violet-300 from-purple-300 from-fuchsia-300 from-pink-300 from-rose-300 from-red-400 from-orange-400 from-amber-400 from-yellow-400 from-lime-400 from-green-400 from-emerald-400 from-teal-400 from-cyan-400 from-sky-400 from-blue-400 from-indigo-400 from-violet-400 from-purple-400 from-fuchsia-400 from-pink-400 from-rose-400 from-red-500 from-orange-500 from-amber-500 from-yellow-500 from-lime-500 from-green-500 from-emerald-500 from-teal-500 from-cyan-500 from-sky-500 from-blue-500 from-indigo-500 from-violet-500 from-purple-500 from-fuchsia-500 from-pink-500 from-rose-500 from-red-600 from-orange-600 from-amber-600 from-yellow-600 from-lime-600 from-green-600 from-emerald-600 from-teal-600 from-cyan-600 from-sky-600 from-blue-600 from-indigo-600 from-violet-600 from-purple-600 from-fuchsia-600 from-pink-600 from-rose-600 from-red-700 from-orange-700 from-amber-700 from-yellow-700 from-lime-700 from-green-700 from-emerald-700 from-teal-700 from-cyan-700 from-sky-700 from-blue-700 from-indigo-700 from-violet-700 from-purple-700 from-fuchsia-700 from-pink-700 from-rose-700 from-red-800 from-orange-800 from-amber-800 from-yellow-800 from-lime-800 from-green-800 from-emerald-800 from-teal-800 from-cyan-800 from-sky-800 from-blue-800 from-indigo-800 from-violet-800 from-purple-800 from-fuchsia-800 from-pink-800 from-rose-800 from-red-900 from-orange-900 from-amber-900 from-yellow-900 from-lime-900 from-green-900 from-emerald-900 from-teal-900 from-cyan-900 from-sky-900 from-blue-900 from-indigo-900 from-violet-900 from-purple-900 from-fuchsia-900 from-pink-900 from-rose-900 to-red-100 to-orange-100 to-amber-100 to-yellow-100 to-lime-100 to-green-100 to-emerald-100 to-teal-100 to-cyan-100 to-sky-100 to-blue-100 to-indigo-100 to-violet-100 to-purple-100 to-fuchsia-100 to-pink-100 to-rose-100 to-red-200 to-orange-200 to-amber-200 to-yellow-200 to-lime-200 to-green-200 to-emerald-200 to-teal-200 to-cyan-200 to-sky-200 to-blue-200 to-indigo-200 to-violet-200 to-purple-200 to-fuchsia-200 to-pink-200 to-rose-200 to-red-300 to-orange-300 to-amber-300 to-yellow-300 to-lime-300 to-green-300 to-emerald-300 to-teal-300 to-cyan-300 to-sky-300 to-blue-300 to-indigo-300 to-violet-300 to-purple-300 to-fuchsia-300 to-pink-300 to-rose-300 to-red-400 to-orange-400 to-amber-400 to-yellow-400 to-lime-400 to-green-400 to-emerald-400 to-teal-400 to-cyan-400 to-sky-400 to-blue-400 to-indigo-400 to-violet-400 to-purple-400 to-fuchsia-400 to-pink-400 to-rose-400 to-red-500 to-orange-500 to-amber-500 to-yellow-500 to-lime-500 to-green-500 to-emerald-500 to-teal-500 to-cyan-500 to-sky-500 to-blue-500 to-indigo-500 to-violet-500 to-purple-500 to-fuchsia-500 to-pink-500 to-rose-500 to-red-600 to-orange-600 to-amber-600 to-yellow-600 to-lime-600 to-green-600 to-emerald-600 to-teal-600 to-cyan-600 to-sky-600 to-blue-600 to-indigo-600 to-violet-600 to-purple-600 to-fuchsia-600 to-pink-600 to-rose-600 to-red-700 to-orange-700 to-amber-700 to-yellow-700 to-lime-700 to-green-700 to-emerald-700 to-teal-700 to-cyan-700 to-sky-700 to-blue-700 to-indigo-700 to-violet-700 to-purple-700 to-fuchsia-700 to-pink-700 to-rose-700 to-red-800 to-orange-800 to-amber-800 to-yellow-800 to-lime-800 to-green-800 to-emerald-800 to-teal-800 to-cyan-800 to-sky-800 to-blue-800 to-indigo-800 to-violet-800 to-purple-800 to-fuchsia-800 to-pink-800 to-rose-800 to-red-900 to-orange-900 to-amber-900 to-yellow-900 to-lime-900 to-green-900 to-emerald-900 to-teal-900 to-cyan-900 to-sky-900 to-blue-900 to-indigo-900 to-violet-900 to-purple-900 to-fuchsia-900 to-pink-900 to-rose-900 ring-red-100 ring-orange-100 ring-amber-100 ring-yellow-100 ring-lime-100 ring-green-100 ring-emerald-100 ring-teal-100 ring-cyan-100 ring-sky-100 ring-blue-100 ring-indigo-100 ring-violet-100 ring-purple-100 ring-fuchsia-100 ring-pink-100 ring-rose-100 ring-red-200 ring-orange-200 ring-amber-200 ring-yellow-200 ring-lime-200 ring-green-200 ring-emerald-200 ring-teal-200 ring-cyan-200 ring-sky-200 ring-blue-200 ring-indigo-200 ring-violet-200 ring-purple-200 ring-fuchsia-200 ring-pink-200 ring-rose-200 ring-red-300 ring-orange-300 ring-amber-300 ring-yellow-300 ring-lime-300 ring-green-300 ring-emerald-300 ring-teal-300 ring-cyan-300 ring-sky-300 ring-blue-300 ring-indigo-300 ring-violet-300 ring-purple-300 ring-fuchsia-300 ring-pink-300 ring-rose-300 ring-red-400 ring-orange-400 ring-amber-400 ring-yellow-400 ring-lime-400 ring-green-400 ring-emerald-400 ring-teal-400 ring-cyan-400 ring-sky-400 ring-blue-400 ring-indigo-400 ring-violet-400 ring-purple-400 ring-fuchsia-400 ring-pink-400 ring-rose-400 ring-red-500 ring-orange-500 ring-amber-500 ring-yellow-500 ring-lime-500 ring-green-500 ring-emerald-500 ring-teal-500 ring-cyan-500 ring-sky-500 ring-blue-500 ring-indigo-500 ring-violet-500 ring-purple-500 ring-fuchsia-500 ring-pink-500 ring-rose-500 ring-red-600 ring-orange-600 ring-amber-600 ring-yellow-600 ring-lime-600 ring-green-600 ring-emerald-600 ring-teal-600 ring-cyan-600 ring-sky-600 ring-blue-600 ring-indigo-600 ring-violet-600 ring-purple-600 ring-fuchsia-600 ring-pink-600 ring-rose-600 ring-red-700 ring-orange-700 ring-amber-700 ring-yellow-700 ring-lime-700 ring-green-700 ring-emerald-700 ring-teal-700 ring-cyan-700 ring-sky-700 ring-blue-700 ring-indigo-700 ring-violet-700 ring-purple-700 ring-fuchsia-700 ring-pink-700 ring-rose-700 ring-red-800 ring-orange-800 ring-amber-800 ring-yellow-800 ring-lime-800 ring-green-800 ring-emerald-800 ring-teal-800 ring-cyan-800 ring-sky-800 ring-blue-800 ring-indigo-800 ring-violet-800 ring-purple-800 ring-fuchsia-800 ring-pink-800 ring-rose-800 ring-red-900 ring-orange-900 ring-amber-900 ring-yellow-900 ring-lime-900 ring-green-900 ring-emerald-900 ring-teal-900 ring-cyan-900 ring-sky-900 ring-blue-900 ring-indigo-900 ring-violet-900 ring-purple-900 ring-fuchsia-900 ring-pink-900 ring-rose-900
*/

/** This component is used to render all color classes for Tailwindcss */
export const ColorClasses = (): JSX.Element => <div />;