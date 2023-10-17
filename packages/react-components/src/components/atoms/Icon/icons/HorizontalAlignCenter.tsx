import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHorizontalAlignCenter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 10h-2V7a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-2 0v3H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v3a1 1 0 0 0 2 0v-3h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM7 8h10v2H7Zm13 8H4v-4h16Z' />
  </svg>
);
export default SvgHorizontalAlignCenter;
