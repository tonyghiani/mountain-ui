/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

import variablesApi from '@mertasan/tailwindcss-variables/api';
import { deepMerge } from '@mountain-ui/utils';
import { Config as TailwindConfig } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import btnClasses from './components/atoms/Button/Button.classes';
import codeClasses from './components/atoms/Code/Code.classes';
import inputClasses from './components/atoms/Input/Input.classes';
import listClasses from './components/atoms/List/List.classes';
import tagClasses from './components/atoms/Tag/Tag.classes';
import typographyClasses from './components/atoms/Typography/Typography.classes';
import visuallyHiddenClasses from './components/atoms/VisuallyHidden/VisuallyHidden.classes';
import accordionClasses from './components/molecules/Accordion/Accordion.classes';
import breadcrumbsClasses from './components/molecules/Breadcrumbs/Breadcrumbs.classes';
import codeblockClasses from './components/molecules/CodeBlock/CodeBlock.classes';
import rangeInputClasses from './components/molecules/RangeInput/RangeInput.classes';

const materialTailwindConfig = {
  content: [
    './node_modules/@mountain-ui/react-components/dist/cjs/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mountain-ui/react-components/dist/esm/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    require('@mertasan/tailwindcss-variables'),
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        ':is(input,button,select,textarea)': {
          outline: 'none'
        }
      });

      // Register components class names
      addComponents(
        Object.assign(
          {},
          btnClasses,
          codeClasses,
          inputClasses,
          listClasses,
          tagClasses,
          visuallyHiddenClasses,
          typographyClasses,
          accordionClasses,
          breadcrumbsClasses,
          codeblockClasses,
          rangeInputClasses
        )
      );

      addComponents(
        variablesApi.variables({
          DEFAULT: {
            c: {
              'text-primary': theme('colors.dark'),
              'text-secondary': theme('colors.gray.600'),
              'text-caption': theme('colors.gray.500'),
              heading1: `var(--c-heading, ${theme('colors.dark')})`,
              heading2: `var(--c-heading, ${theme('colors.dark')})`,
              heading3: `var(--c-heading, ${theme('colors.dark')})`,
              heading4: `var(--c-heading, ${theme('colors.dark')})`,
              heading5: `var(--c-heading, ${theme('colors.dark')})`,
              heading6: `var(--c-heading, ${theme('colors.dark')})`
            }
          }
        })
      );

      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.mnt-scrollbar': {
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme('colors.gray.400')} transparent`,
          '&::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            inlineSize: theme('space.3'),
            blockSize: theme('space.3')
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme('colors.gray.400'),
            backgroundClip: 'content-box',
            borderRadius: theme('borderRadius.lg'),
            border: '6px solid transparent'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme('colors.gray.300')
          }
        },
        '.no-scrollbar': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      };

      addUtilities(newUtilities);
    })
  ],
  theme: {
    fontFamily: {
      normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif',
      code: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace"
    },
    extend: {
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
      lineHeight: {
        6.5: '1.625'
      },
      colors: {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(210, 14%, 9%)'
      },
      boxShadow: {
        'outline-button': 'inset 0 0 0 2px',
        input: 'inset 0 0 0 2px var(--text-input)',
        'input-focus': 'inset 0 0 0 3px var(--text-input)'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  }
};

export function withMntConfig(tailwindConfig: TailwindConfig): TailwindConfig {
  return deepMerge(materialTailwindConfig, { ...tailwindConfig });
}
