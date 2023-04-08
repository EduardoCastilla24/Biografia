module.exports = {
  darkMode: 'class',
  content: [
    'public/index.html',
    'public/**/*.{html,js,css}',
    'public/dist/output.css',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'auto': ' repeat(auto-fit, minmax(250px, 1fr))',
      },
      colors: {
        'primary-color': '#09C492',
        'back-color': '#38424B',
        // 'second-color': '#0eaaea',
        // 'third-color': '#1dc5ac',
        'gray-color': '#a4a4a4',
        'hover-color': '#efefef',
        'overlay-color': 'rgba(0, 0, 0, .4)',
      },
      animation: {
        'slide': 'slide .75s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        }
      }
    },
    screens: {
      // => @media (min-width: 350px) { ... }
      'xxs': '350px',
      // => @media (min-width: 420px) { ... }
      'xs': '420px',
      // => @media (min-width: 640px) { ... }
      'sm': '550px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 820px) { ... }
      'bs': '900px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1536px) { ... }
      '2xl': '1536px',
      // => @media (min-height: 500px) { ... }
      'tall': { 'raw': '(min-height: 500px)' }
    }
  },
};
