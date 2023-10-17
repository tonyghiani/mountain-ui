import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDesktopSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.66 6H18a1 1 0 0 1 1 1v6a.94.94 0 0 1-.14.5 1 1 0 0 0 .31 1.38.94.94 0 0 0 .53.16 1 1 0 0 0 .84-.46A2.94 2.94 0 0 0 21 13V7a3 3 0 0 0-3-3h-7.34a1 1 0 0 0 0 2Zm11.05 14.29L5.86 4.45 3.71 2.29a1 1 0 0 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v6a3 3 0 0 0 3 3h5v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .93-.66l2.36 2.37a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 14a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L12.59 14Zm7 4v-2h1.59l2 2Z' />
  </svg>
);
export default SvgDesktopSlash;
