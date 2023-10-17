import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWall = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 9a1 1 0 0 0 0-2h-1V5h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-1v-2h1a1 1 0 0 0 0-2h-3V9ZM8 5h4v2H8Zm8 4v2h-4V9ZM6 9h4v2H6Zm6 4v2H8v-2Zm-2 6H6v-2h4Zm6 0h-4v-2h4Zm2-4h-4v-2h4Zm-4-8V5h4v2Z' />
  </svg>
);
export default SvgWall;
