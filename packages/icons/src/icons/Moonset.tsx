import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonset = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11 19H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9-4h-1.16A8.18 8.18 0 0 0 20 12.05a1 1 0 0 0-.34-.93 1 1 0 0 0-1-.19 6 6 0 0 1-1.92.32 6.06 6.06 0 0 1-6.06-6 6.93 6.93 0 0 1 .1-1 1 1 0 0 0-.35-.92 1 1 0 0 0-1-.18A8.06 8.06 0 0 0 4 10.68 8 8 0 0 0 5.27 15H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm-3.72 0H7.83a6 6 0 0 1 .88-9.36 8.06 8.06 0 0 0 8.05 7.61 7 7 0 0 0 .79 0A6.08 6.08 0 0 1 16.28 15ZM16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgMoonset;
