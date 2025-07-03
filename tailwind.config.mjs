/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--colors-primary-50)',
          100: 'var(--colors-primary-100)',
          200: 'var(--colors-primary-200)',
          300: 'var(--colors-primary-300)',
          400: 'var(--colors-primary-400)',
          500: 'var(--colors-primary-500)',
          600: 'var(--colors-primary-600)',
          700: 'var(--colors-primary-700)',
          800: 'var(--colors-primary-800)',
          900: 'var(--colors-primary-900)',
        },
        gray: {
          50: 'var(--colors-gray-50)',
          100: 'var(--colors-gray-100)',
          200: 'var(--colors-gray-200)',
          300: 'var(--colors-gray-300)',
          400: 'var(--colors-gray-400)',
          500: 'var(--colors-gray-500)',
          600: 'var(--colors-gray-600)',
          700: 'var(--colors-gray-700)',
          800: 'var(--colors-gray-800)',
          900: 'var(--colors-gray-900)',
          950: 'var(--colors-gray-950)',
        },
        terminal: {
          bg: 'var(--colors-terminal-background)',
          text: 'var(--colors-terminal-text)',
          cursor: 'var(--colors-terminal-cursor)',
          selection: 'var(--colors-terminal-selection)',
          border: 'var(--colors-terminal-border)',
          header: 'var(--colors-terminal-header)',
        },
        success: 'var(--colors-semantic-success)',
        error: 'var(--colors-semantic-error)',
        warning: 'var(--colors-semantic-warning)',
        info: 'var(--colors-semantic-info)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        serif: ['var(--font-serif)'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 200ms ease-in',
        'fade-out': 'fadeOut 200ms ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      boxShadow: {
        terminal: '0 0 10px rgba(16, 185, 129, 0.2), 0 0 20px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-terminal-bg',
    'text-terminal-text',
    'border-terminal-border',
    'bg-terminal-header',
    'text-primary-500',
    'bg-primary-500',
    'hover:bg-primary-600',
    'text-success',
    'text-error',
    'text-warning',
    'text-info'
  ],
};
