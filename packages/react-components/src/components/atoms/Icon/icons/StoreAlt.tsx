import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStoreAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M22 2H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.82A3 3 0 0 0 23 7V3a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 4h2v3a1 1 0 0 1-2 0ZM4 8a1 1 0 0 1-1-1V4h2v3a1 1 0 0 1-1 1Zm10 12h-4v-4a2 2 0 0 1 4 0Zm5 0h-3v-4a4 4 0 0 0-8 0v4H5V9.82a3.17 3.17 0 0 0 1-.6 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3.17 3.17 0 0 0 1 .6Zm2-13a1 1 0 0 1-2 0V4h2Z' />
  </svg>
);
export default SvgStoreAlt;
