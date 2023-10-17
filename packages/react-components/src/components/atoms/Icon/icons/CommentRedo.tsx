import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentRedo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 14a1 1 0 0 0-1.22.72A7 7 0 0 1 11 20H5.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 3.2-11.74 1 1 0 0 0-.5-1.94A9 9 0 0 0 4 18.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.72-6.75A1 1 0 0 0 19 14Zm2-12a1 1 0 0 0-1 1 5 5 0 1 0 .3 7.75 1 1 0 1 0-1.3-1.5A3 3 0 1 1 17 4a3 3 0 0 1 2.23 1H18a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgCommentRedo;
