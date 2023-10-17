import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTriangle = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.87 19.29-9-15.58a1 1 0 0 0-1.74 0l-9 15.58a1 1 0 0 0 0 1 1 1 0 0 0 .87.5h18a1 1 0 0 0 .87-.5 1 1 0 0 0 0-1Zm-17.14-.5L12 6.21l7.27 12.58Z' />
  </svg>
);
export default SvgTriangle;
