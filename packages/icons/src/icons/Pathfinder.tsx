import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPathfinder = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M4 14.46a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2ZM8.18 4h2.1a1 1 0 0 0 0-2h-2.1a1 1 0 0 0 0 2Zm6.28 0a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2ZM4 2H3a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0 1 1 0 0 0 0-2Zm-1 9.28a1 1 0 0 0 1-1v-2.1a1 1 0 0 0-2 0v2.1a1 1 0 0 0 1 1ZM15.82 20h-2.1a1 1 0 1 0 0 2h2.1a1 1 0 0 0 0-2ZM21 7.54h-1a1 1 0 0 0 0 2 1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm0 5.18a1 1 0 0 0-1 1v2.1a1 1 0 0 0 2 0v-2.1a1 1 0 0 0-1-1Zm-4.54-5.18a1 1 0 1 0-2 0H8.54a1 1 0 0 0-1 1v5.92a1 1 0 1 0 0 2 1 1 0 0 0 2 0h5.92a1 1 0 0 0 1-1V9.54a1 1 0 1 0 0-2Zm-2 6.92H9.54V9.54h4.92ZM21 19a1 1 0 0 0-1 1 1 1 0 0 0 0 2h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM9.54 20a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgPathfinder;
