import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderVertical = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm16-2a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM7 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM7 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM3 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm16-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm4 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgBorderVertical;
