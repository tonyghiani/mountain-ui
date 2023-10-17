import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.84 5.38a2 2 0 0 1 2.57.21A2 2 0 0 1 14 7v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.34a1 1 0 0 0 2 0V12a3 3 0 0 0-3-3V7a4 4 0 0 0-1.17-2.83 4.06 4.06 0 0 0-5.19-.39 1 1 0 1 0 1.2 1.6Zm10.87 14.91-18-18a1 1 0 0 0-1.42 1.42L7.62 9A3 3 0 0 0 5 12v6a3 3 0 0 0 3 3h8a3 3 0 0 0 2.39-1.2l1.9 1.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM16 19H8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1.59l2.07 2.07A1 1 0 0 0 11 14v2a1 1 0 0 0 2 0v-1.59l3.93 3.93A1 1 0 0 1 16 19Z' />
  </svg>
);
export default SvgLockSlash;
