import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWheelchairAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20 16.18V16a3 3 0 0 0-2-2.82V7h1a1 1 0 0 0 0-2H7a3 3 0 0 0-3-3H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7.42A5 5 0 1 0 12 17a4.94 4.94 0 0 0-.42-2H17a1 1 0 0 1 1 1v.18a3 3 0 1 0 2 0ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm9-7h-6a4.93 4.93 0 0 0-3-1v-1h9Zm0-4H7V7h9Zm3 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM7 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgWheelchairAlt;
