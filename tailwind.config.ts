import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom10: '#0B3B60',
        custom20: '#90989F',
        custom30: '#FFFFFF',
        custom40: '#E7EBEF',
        custom50: '#339CFF',
        custom60: '#EDEDED',
        custom70: '#F8F8F8',
        custom80: '#6B6E71',
        custom90: '#90989F',
      },
    },
  },
  plugins: [],
} satisfies Config;
