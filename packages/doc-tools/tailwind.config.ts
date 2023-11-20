/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  extends: {
    fontSize: {
      caption: '0.75rem',
      secondaryBody: '0.875rem',
      body: '1rem'
    },
    colors: {
      light: 'hsl(0, 0%, 98%)',
      dark: 'hsl(210, 14%, 9%)'
    }
  }
};
