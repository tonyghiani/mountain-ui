import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptopCloud = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name=''
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M4.5 10H10a3 3 0 0 0 1.07-5.8 4 4 0 0 0-7.48 1A2.5 2.5 0 0 0 4.5 10Zm0-3a1 1 0 0 0 1-1 2 2 0 0 1 3.89-.64 1 1 0 0 0 .78.66A1 1 0 0 1 11 7a1 1 0 0 1-1 1H4.5a.5.5 0 0 1 0-1ZM21 16h-1V9a3 3 0 0 0-3-3h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7H6v-3a1 1 0 0 0-2 0v3H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1Zm-1 3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z' />
  </svg>
);
export default SvgLaptopCloud;
