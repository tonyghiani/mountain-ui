import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpin = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13 3a7 7 0 0 0 0 14 5 5 0 0 0 0-10 3 3 0 0 0 0 6 1 1 0 0 0 0-2 1 1 0 0 1 0-2 3 3 0 0 1 0 6 5 5 0 0 1 0-10 7 7 0 0 1 0 14 9 9 0 0 1-9-9 1 1 0 0 0-2 0 11 11 0 0 0 11 11 9 9 0 0 0 0-18Z' />
  </svg>
);
export default SvgSpin;
