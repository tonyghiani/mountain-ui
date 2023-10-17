import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRssInterface = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 14a1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5Zm-.71 4.29a1 1 0 1 0 1.42 0 1 1 0 0 0-1.42 0ZM19 4H5a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM3 10a1 1 0 0 0 0 2 7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9Z' />
  </svg>
);
export default SvgRssInterface;
