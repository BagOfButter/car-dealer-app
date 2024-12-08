import type { Config } from 'tailwindcss';

export default {
  content: [
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        header: 'var(--header)',
        hover: 'var(--hover)',
        buttonText: 'var(--button-text)',
      },
      maxWidth: {
        'screen-xl': '1500px',
      },
    },
  },
  plugins: [],
} satisfies Config;
