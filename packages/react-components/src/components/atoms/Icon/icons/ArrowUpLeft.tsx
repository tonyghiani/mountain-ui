import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpLeft = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9.41 8H17a1 1 0 0 0 0-2H7a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 6 7v10a1 1 0 0 0 2 0V9.41l8.29 8.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
  </svg>
);
export default SvgArrowUpLeft;
