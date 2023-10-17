import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationPinAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 10.8a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm-.71 6.91a1 1 0 0 0 1.42 0l4.09-4.1a6.79 6.79 0 1 0-9.6 0ZM7.23 8.34a4.81 4.81 0 0 1 2.13-3.55 4.81 4.81 0 0 1 5.28 0 4.82 4.82 0 0 1 .75 7.41L12 15.59 8.61 12.2a4.77 4.77 0 0 1-1.38-3.86ZM19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgLocationPinAlt;
