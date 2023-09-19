import { MntProps, createMntComponent } from '../../../internals/create_mnt_component';

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

const bold = "font-bold"
const gradient = (opts?: TextGradientOptions) => opts ? `text-transparent bg-clip-text bg-gradient-to-${opts.direction} from-${opts.from} to-${opts.to}` : ''
const lineClamp = (rowsCount?: number) => rowsCount > 0 ? `line-clamp-${rowsCount}` : ''
const truncate = 'truncate'
const uncopyable = 'select-none'
const underline = 'underline underline-offset-2';

const BaseTypography = createMntComponent<BaseTypographyProps>('span')({
  classFromProps: {
    bold,
    gradient,
    lineClamp,
    truncate,
    uncopyable,
    underline,
  }
})

BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;