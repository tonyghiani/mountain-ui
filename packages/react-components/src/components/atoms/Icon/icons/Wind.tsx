import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWind = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3.5 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm4 0h7a3 3 0 0 0 0-6 3.06 3.06 0 0 0-1.5.4 1 1 0 0 0-.37 1.37 1 1 0 0 0 1.37.36 1.09 1.09 0 0 1 .5-.13 1 1 0 0 1 0 2h-7a1 1 0 0 0 0 2Zm-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2Zm17-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6Zm-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1.09 1.09 0 0 1-.5-.13 1 1 0 1 0-1 1.73 3.06 3.06 0 0 0 1.5.4 3 3 0 0 0 0-6Zm-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgWind;
