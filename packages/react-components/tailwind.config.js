import { withMntConfig } from './src/with_mnt_config';

/** @type {import('tailwindcss').Config} */
export default withMntConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}']
});
