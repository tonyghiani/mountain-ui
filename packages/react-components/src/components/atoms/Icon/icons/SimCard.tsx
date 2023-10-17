import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSimCard = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5Zm-6.5 2h3v3h-3Zm-2 13H7A1.5 1.5 0 0 1 5.5 17v-1.5h3Zm5 0h-3v-3h3Zm5-1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v-3h3Zm0-3.5h-13V7A1.5 1.5 0 0 1 7 5.5h1.5v4a1 1 0 0 0 1 1h9Zm0-5h-3v-3H17A1.5 1.5 0 0 1 18.5 7Z' />
  </svg>
);
export default SvgSimCard;
