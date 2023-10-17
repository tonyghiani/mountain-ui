import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownRight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17 6a1 1 0 0 0-1 1v7.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 18 17V7a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgArrowDownRight;
