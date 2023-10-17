import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNoEntry = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 20h-1.24L15.37 4.2A3 3 0 0 0 12.48 2h-1a3 3 0 0 0-2.85 2.2L4.24 20H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM10.56 4.73a1 1 0 0 1 1-.73h1a1 1 0 0 1 1 .73L14.35 8h-4.7ZM9.09 10h5.82L16 14H8ZM6.32 20l1.11-4h9.14l1.11 4Z' />
  </svg>
);
export default SvgNoEntry;
