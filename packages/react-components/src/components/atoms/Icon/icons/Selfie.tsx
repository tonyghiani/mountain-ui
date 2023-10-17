import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSelfie = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h10Zm-5-5a3 3 0 0 1 2.82 2H9.18A3 3 0 0 1 12 14Zm-1-3a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm6 5h-.1a5 5 0 0 0-2.42-3.32A3 3 0 0 0 15 11a3 3 0 0 0-6 0 3 3 0 0 0 .52 1.68A5 5 0 0 0 7.1 16H7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1ZM12 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgSelfie;
