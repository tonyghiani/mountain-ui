import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentShare = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.06 13.51a1 1 0 0 0-1.11.87A7 7 0 0 1 11 20.5H5.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 3.2-11.74 1 1 0 0 0-.5-1.94A9 9 0 0 0 4 19.12l-1.71 1.67a1 1 0 0 0-.21 1.09 1 1 0 0 0 .92.62h8a9 9 0 0 0 8.93-7.88 1 1 0 0 0-.87-1.11ZM19 7.5a2 2 0 0 0-1.18.39l-1.75-.8L18 6.21a2 2 0 0 0 1 .29 2 2 0 1 0-2-2l-1.9.87A2 2 0 0 0 14 5a2 2 0 0 0 0 4 2 2 0 0 0 .93-.24l2.09 1A2 2 0 1 0 19 7.5Z' />
  </svg>
);
export default SvgCommentShare;
