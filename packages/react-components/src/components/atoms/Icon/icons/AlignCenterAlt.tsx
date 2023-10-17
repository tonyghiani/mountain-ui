import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignCenterAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M5 8h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2Zm16 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-2 5H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgAlignCenterAlt;
