import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSignRight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M7 6v5a1 1 0 0 0 1 1h3v8H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-8h5a1 1 0 0 0 .78-.37l2-2.5a1 1 0 0 0 0-1.25l-2-2.5A1 1 0 0 0 18 5h-5V3a1 1 0 0 0-2 0v2H8a1 1 0 0 0-1 1Zm2 1h8.52l1.2 1.5-1.2 1.5H9Z' />
  </svg>
);
export default SvgSignRight;
