/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    // Custom fluid screens with better mobile breakpoints
    screens: {
      'xs': '375px',   // Small mobile devices
      'sm': '640px',   // Large mobile/Small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Small laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large desktops
    },
    extend: {
      // Enhanced typography with modern font stack
      fontFamily: {
        'sans': ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        'display': ['Outfit', 'Inter', ...defaultTheme.fontFamily.sans], // Switched to Outfit from Manrope
        'mono': ['JetBrains Mono', 'Menlo', ...defaultTheme.fontFamily.mono],
      },
      // Refined and expanded color palette with softer tones
      colors: {
        // Neutral palette - softer and more balanced
        'neutral': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Primary brand color - more subtle slate-blue for refined corporate look
        'primary': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent color - gold/amber for premium feel (Corzo style)
        'accent': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Surface colors for layering UI elements
        'surface': {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f4f4f5',
          300: '#e4e4e7',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Enhanced success, error, warning, and info states - complete palette
        'success': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'error': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        'warning': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        'info': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      // Enhanced background images with Corzo-style overlays
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-bg.jpg')",
        'about-hero': "url('/src/assets/about-hero.jpg')",
        'team-hero': "url('/src/assets/team-hero.jpg')",
        'gradient-subtle': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from var(--tw-gradient-angle), var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
        'gradient-overlay-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85))',
      },
      // Enhanced font sizes with fluid typography options - expanded for Corzo large hero text
      fontSize: {
        'xxs': '0.65rem',
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.95' }],  // Extra large for Corzo-style hero text
      },
      // Enhanced spacing system - expanded for Corzo full-width sections
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '13rem',
        '54': '14rem',
        '58': '15rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      // Enhanced responsive heights - expanded for full-height sections like Corzo
      height: {
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-95': '95vh',
        'dvh-50': '50dvh',
        'dvh-60': '60dvh',
        'dvh-70': '70dvh',
        'dvh-75': '75dvh',
        'dvh-80': '80dvh',
        'dvh-85': '85dvh',
        'dvh-90': '90dvh',
        'dvh-95': '95dvh',
        'dvh-100': '100dvh',
        'numbered': '3rem',  // For numbered elements
        'numbered-lg': '4rem',  // For larger numbered elements
      },
      // Enhanced max widths for better content layout - expanded for large sections like Corzo
      maxWidth: {
        'readable': '65ch',
        'xs': '20rem', // 320px
        '2xs': '16rem', // 256px
        '8xl': '88rem', // 1408px - for extra wide layouts like Corzo
        '9xl': '96rem', // 1536px
      },
      // Refined shadow system for more dramatic depth like Corzo
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.02), 0 1px 2px -1px rgb(0 0 0 / 0.03)',
        'soft': '0 2px 4px 0 rgb(0 0 0 / 0.03), 0 1px 3px -1px rgb(0 0 0 / 0.05)',
        'medium': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'strong': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'elevated': '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
        'inner-light': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'inner-medium': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      // Enhanced blur effects
      backdropBlur: {
        'subtle': 'blur(4px)',
        'medium': 'blur(8px)',
        'strong': 'blur(16px)',
      },
      // Enhanced animation system with delayed animations like Corzo
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out': 'fade-out 0.4s ease-in',
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in-delay': 'fade-in 0.4s ease-out 0.3s both',
        'fade-in-delay-long': 'fade-in 0.4s ease-out 0.6s both',
        'fade-in-up-delay': 'fade-in-up 0.5s ease-out 0.3s both',
      },
      // Enhanced keyframes for smoother animations - more dramatic like Corzo
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // Enhanced transition timing functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design standard easing
        'in': 'cubic-bezier(0.4, 0, 1, 1)',        // Ease-in (accelerate)
        'out': 'cubic-bezier(0, 0, 0.2, 1)',       // Ease-out (decelerate)
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',  // Ease-in-out (accelerate-decelerate)
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bounce effect
      },
      // Enhanced transition durations
      transitionDuration: {
        '50': '50ms',
        '150': '150ms',
        '250': '250ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      // Enhanced border radius for smoother corners
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        'full': '9999px',
      },
      // Touch target sizes - enhanced for Corzo-style elements
      minWidth: {
        'touch': '2.75rem', // 44px (iOS minimum)
        'button': '10rem',  // Consistent button width like Corzo
        'numbered': '3rem', // For numbered elements 
      },
      minHeight: {
        'touch': '2.75rem', // 44px (iOS minimum)
        'section': '100vh',  // Full height sections like Corzo
        'numbered': '3rem', // For numbered elements
      },
      // Line heights for better typography
      lineHeight: {
        'tighter': '1.1',
        'tight': '1.25',
        'snug': '1.35',
        'normal': '1.5',
        'relaxed': '1.65',
        'loose': '2',
      },
      // Z-index scale for consistent layering
      zIndex: {
        'below': '-1',
        'base': '0',
        'above': '1',
        'header': '100',
        'dropdown': '200',
        'modal': '300',
        'tooltip': '400',
        'top': '999',
      },
      // Container padding specific to screen sizes
      container: {
        padding: {
          DEFAULT: '1rem',
          xs: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // Add plugin for custom touch/mobile-friendly styles
    plugin(function({ addUtilities }) {
      const newUtilities = {
        // CSS for mobile-friendly tap target sizes
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        // Safe area inset utilities for modern iOS devices
        '.pt-safe': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.pr-safe': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.pb-safe': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.pl-safe': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        // Text utilities for improved typography
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        // Smooth scroll utility
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
      };
      addUtilities(newUtilities);
    }),
    
    // Add plugin for Corzo-style numbered sections
    plugin(function({ addComponents, theme }) {
      const components = {
        // Corzo-style section padding
        '.section-padding': {
          paddingTop: theme('spacing.16'),
          paddingBottom: theme('spacing.16'),
          '@screen md': {
            paddingTop: theme('spacing.24'),
            paddingBottom: theme('spacing.24'),
          },
          '@screen lg': {
            paddingTop: theme('spacing.30'),
            paddingBottom: theme('spacing.30'),
          },
        },
        
        // Corzo-style numbered items
        '.numbered-item': {
          position: 'relative',
          paddingLeft: theme('spacing.16'),
        },
        
        '.numbered-circle': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: '0',
          top: '0',
          width: theme('width.numbered'),
          height: theme('height.numbered'),
          borderRadius: theme('borderRadius.full'),
          backgroundColor: theme('colors.primary.600'),
          color: theme('colors.white'),
          fontWeight: theme('fontWeight.bold'),
        },
        
        // Corzo-style services grid
        '.services-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: theme('spacing.6'),
          '@screen md': {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: theme('spacing.8'),
          },
          '@screen xl': {
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          },
        },
        
        // Corzo-style card hover effects
        '.card-hoverable': {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-0.25rem)',
            boxShadow: theme('boxShadow.xl'),
          }
        },
        
        // Corzo-style buttons
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          outline: 'none',
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${theme('colors.primary.100')}`,
            ring: '2px',
            ringColor: theme('colors.primary.500'),
            ringOffset: '2px',
          },
        },
        
        '.btn-lg': {
          padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
          fontSize: theme('fontSize.lg[0]'),
        },

        // Badge component like on Corzo
        '.badge': {
          display: 'inline-block',
          padding: `${theme('spacing[1]')} ${theme('spacing[3]')}`,
          borderRadius: theme('borderRadius.full'),
          fontSize: theme('fontSize.xs[0]'),
          fontWeight: theme('fontWeight.medium'),
        },
        
        '.badge-primary': {
          backgroundColor: theme('colors.primary.50'),
          color: theme('colors.primary.600'),
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            color: theme('colors.primary.400'),
          },
        },
      };
      
      addComponents(components);
    }),
  ],
};
