import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToggleOn = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14Zm0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10Z' />
  </svg>
);
export default SvgToggleOn;
