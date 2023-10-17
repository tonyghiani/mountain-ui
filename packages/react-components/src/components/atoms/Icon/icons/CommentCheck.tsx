import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentCheck = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13.29 7.13a1 1 0 0 0 0 1.42l1.92 1.92a1 1 0 0 0 1.42 0l4.08-4.08A1 1 0 1 0 19.29 5l-3.37 3.35-1.21-1.22a1 1 0 0 0-1.42 0Zm6.62 3.51a1 1 0 0 0-.91 1.08 2.62 2.62 0 0 1 0 .28 7 7 0 0 1-7 7H6.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 3.48-11.81 7.14 7.14 0 0 1 2.8 0 1 1 0 1 0 .4-2 9.15 9.15 0 0 0-3.61 0A9.05 9.05 0 0 0 3 12a9 9 0 0 0 2 5.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 21h8a9 9 0 0 0 9-9v-.44a1 1 0 0 0-1.09-.92Z' />
  </svg>
);
export default SvgCommentCheck;
