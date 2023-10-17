import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderLeft = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11.5 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-8-8a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm16 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-8 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-8-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm8 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgBorderLeft;
