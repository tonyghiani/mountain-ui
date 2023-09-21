import { MntProps, mnt } from '../../../internals/create_mnt_component';

export interface BaseTypographyProps extends MntProps {
  /* Text should be uncopyable */
  uncopyable?: boolean;
  /* Text should be bold */
  bold?: boolean;
  /* Text should be wrapped in ellipsis */
  truncate?: boolean;
  /* Text should be clamped to specified line count */
  lineClamp?: number;
  /* Text should be underlined */
  underline?: boolean;
  /* Text have gradient color */
  gradient?: TextGradientOptions;
}

export interface TextGradientOptions {
  from: string;
  to: string
  direction?: 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'
}

const BaseTypography = mnt<BaseTypographyProps>('span')`
  ${({ bold }) => bold ? "font-bold" : ''}
  ${({ gradient }) => gradient ? `text-transparent bg-clip-text bg-gradient-to-${gradient.direction} from-${gradient.from} to-${gradient.to}` : ''}
  ${({ lineClamp }) => lineClamp > 0 ? `line-clamp-${lineClamp}` : ''}
  ${({ truncate }) => truncate ? 'truncate' : ''}
  ${({ uncopyable }) => uncopyable ? 'select-none' : ''}
  ${({ underline }) => underline ? 'underline underline-offset-2' : ''}
`

BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;