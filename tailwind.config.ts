import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4338CA',
      },
      fontFamily: {
        body: ['var(--font-family)'],
      },
      backgroundImage: () => ({
        'gradient-to-45': 'linear-gradient(146deg, #f9fafb 0%, #d2d6db 100%)',
      }),
      aspectRatio: {
        '1.3513': '592 / 800',
        '0.8421': '160 / 190',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      // fontSize: {
      //   'text-5xl': '3rem / 1',
      // },
    },
  },
  plugins: [],
} satisfies Config;
