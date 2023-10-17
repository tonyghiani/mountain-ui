import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentEdit = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.71 4.72-2.43-2.43a1 1 0 0 0-1.41 0l-5.58 5.58a1 1 0 0 0-.29.71V11a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .71-.29l5.58-5.58a1 1 0 0 0 0-1.41ZM15 10h-1V9l4.58-4.58 1 1Zm4 2a1 1 0 0 0-1 1 7 7 0 0 1-7 7H5.41l.64-.63a1 1 0 0 0 0-1.42A7 7 0 0 1 11 6a1 1 0 0 0 0-2 9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 9-9 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgCommentEdit;
