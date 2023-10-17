import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserTimes = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0 6 6 0 0 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28ZM10 11.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm10.91.5.8-.79a1 1 0 0 0-1.42-1.42l-.79.8-.79-.8a1 1 0 0 0-1.42 1.42l.8.79-.8.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.79-.8.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
  </svg>
);
export default SvgUserTimes;
