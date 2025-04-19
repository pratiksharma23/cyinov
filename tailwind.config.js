/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-bg.jpg')",
        'about-hero': "url('/src/assets/about-hero.jpg')",
        'team-hero': "url('/src/assets/team-hero.jpg')",
      },
    },
  },
  plugins: [],
};

