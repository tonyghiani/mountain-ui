import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarkerSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.63 5.49a6 6 0 0 1 7.21 7.2 1 1 0 0 0 .74 1.21.9.9 0 0 0 .23 0 1 1 0 0 0 1-.76 8 8 0 0 0-9.61-9.62 1 1 0 0 0 .46 2Zm11.08 14.58-4.27-4.27L3.71 2.07a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L5.5 6.69A8 8 0 0 0 6.34 17l4.95 4.95a1 1 0 0 0 1.42 0l4-4 3.56 3.56a1 1 0 0 0 1.42-1.41Zm-9.59-6.76a2 2 0 0 1-1.53-.57 2 2 0 0 1-.59-1.53Zm-.12 6.5-4.24-4.24a6 6 0 0 1-.82-7.44L8.41 9.6a4 4 0 0 0 .76 4.55A4 4 0 0 0 12 15.33a3.93 3.93 0 0 0 1.73-.41l1.58 1.58Z' />
  </svg>
);
export default SvgMapMarkerSlash;
