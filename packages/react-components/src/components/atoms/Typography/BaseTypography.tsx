import mnt from 'react-mnt';

export const TEXT_GRADIENT_DIRECTIONS = {
  t: 'bg-gradient-to-t',
  tr: 'bg-gradient-to-tr',
  r: 'bg-gradient-to-r',
  br: 'bg-gradient-to-br',
  b: 'bg-gradient-to-b',
  bl: 'bg-gradient-to-bl',
  l: 'bg-gradient-to-l',
  tl: 'bg-gradient-to-tl'
} as const;

export type MntTextGradientDirection = keyof typeof TEXT_GRADIENT_DIRECTIONS;
export interface TextGradientOptions {
  from: string;
  to?: string;
  direction?: MntTextGradientDirection;
}

interface BaseTypographyProps {
  /**
   * Text should be uncopyable.
   */
  uncopyable?: boolean;
  /**
   * Text should be bold.
   */
  bold?: boolean;
  /**
   * Text should be wrapped in ellipsis.
   */
  truncate?: boolean;
  /**
   * Text should be underlined.
   */
  underline?: boolean;
  /**
   * Text have gradient color.
   */
  gradient?: TextGradientOptions;
}

export const MntBaseTypography = mnt('span')<BaseTypographyProps>`
  ${({ bold }) => (bold ? 'font-bold' : '')}
  ${({ gradient }) =>
    gradient
      ? `text-transparent bg-clip-text ${TEXT_GRADIENT_DIRECTIONS[gradient.direction ?? 'r']} ${
          gradient.from
        } ${gradient.to ? gradient.to : ''}`
      : ''}
  ${({ truncate }) => (truncate ? 'truncate' : '')}
  ${({ uncopyable }) => (uncopyable ? 'select-none' : '')}
  ${({ underline }) => (underline ? 'underline underline-offset-4' : '')}
`;

export type MntBaseTypographyProps = React.ComponentPropsWithRef<typeof MntBaseTypography>;

MntBaseTypography.displayName = 'MntBaseTypography';
