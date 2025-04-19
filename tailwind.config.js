/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-bg.jpg')",
        'about-hero': "url('/src/assets/about-hero.jpg')",
        'team-hero': "url('/src/assets/team-hero.jpg')",
      },
      fontSize: {
        'xxs': '0.65rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      height: {
        'screen-50': '50vh',
        'screen-75': '75vh',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

