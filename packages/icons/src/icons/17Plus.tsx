import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Svg17Plus = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11 7v2a1 1 0 0 0 2 0V8h2.78L14 16.8a1 1 0 0 0 .8 1.2h.2a1 1 0 0 0 1-.8l2-10a1 1 0 0 0-.21-.83A1 1 0 0 0 17 6h-5a1 1 0 0 0-1 1Zm7-2h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z' />
  </svg>
);
export default Svg17Plus;
