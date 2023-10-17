import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHorizontalAlignLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    data-name=''
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M21 10h-5V7a1 1 0 0 0-1-1H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-3h17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM4 8h10v2H4Zm16 8H4v-4h16Z' />
  </svg>
);
export default SvgHorizontalAlignLeft;
