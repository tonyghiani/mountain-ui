/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif',
      code: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace"
    },
    fontSize: {
      caption: '0.75rem',
      secondaryBody: '0.875rem',
      body: '1rem',
      h6: '1rem',
      h5: 'clamp(1.2rem, 8vw - 1.9rem, 1.5rem)',
      h4: 'clamp(1.3rem, 8vw - 1.8rem, 1.6rem)',
      h3: 'clamp(1.4rem, 8vw - 1.7rem, 1.8rem)',
      h2: 'clamp(1.6rem, 8vw - 1.5rem, 2.2rem)',
      h1: 'clamp(2.1rem, 8vw - 1rem, 3rem)'
    },
    extend: {
      colors: {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(210, 14%, 9%)'
      },
      boxShadow: {
        'outline-button': 'inset 0 0 0 2px',
        input: 'inset 0 0 0 2px var(--text-input)',
        'input-focus': 'inset 0 0 0 3px var(--text-input)'
      }
    }
  },
  plugins: []
};
