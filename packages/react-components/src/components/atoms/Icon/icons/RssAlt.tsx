import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRssAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M2.88 16.88a3 3 0 1 0 4.24 4.24 3 3 0 0 0 0-4.24 3.08 3.08 0 0 0-4.24 0Zm2.83 2.83a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42ZM5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0A11 11 0 0 0 5 8Z' />
  </svg>
);
export default SvgRssAlt;
