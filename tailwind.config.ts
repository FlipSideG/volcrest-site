import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['7rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-large': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'wide-caps': '0.15em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1140px',
        'narrow': '800px',
      },
      colors: {
        'off-white': '#FAFAFA',
        'soft-black': '#0A0A0A',
        'gray-50': '#F9FAFB',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
      },
    },
  },
  plugins: [],
};
export default config;

