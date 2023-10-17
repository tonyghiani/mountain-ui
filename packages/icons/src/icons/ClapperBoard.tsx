import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClapperBoard = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-2.91 2-4 4H7.91l4-4ZM4 5a1 1 0 0 1 1-1h4.09l-4 4H4Zm16 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11h-5.09l4-4H19a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgClapperBoard;
