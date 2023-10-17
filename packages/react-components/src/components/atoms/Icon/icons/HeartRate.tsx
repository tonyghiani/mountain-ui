import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartRate = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 11h-3.94a.78.78 0 0 0-.21 0h-.17a1.3 1.3 0 0 0-.15.1 1.67 1.67 0 0 0-.16.12 1 1 0 0 0-.09.13 1.32 1.32 0 0 0-.12.2l-1.6 4.41-4.17-11.3a1 1 0 0 0-1.88 0L6.2 11H3a1 1 0 0 0 0 2H7.3a.86.86 0 0 0 .16-.1 1.67 1.67 0 0 0 .16-.12l.09-.13a1 1 0 0 0 .12-.2l1.62-4.53 4.16 11.42a1 1 0 0 0 .94.66 1 1 0 0 0 .94-.66l2.3-6.34H21a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgHeartRate;
