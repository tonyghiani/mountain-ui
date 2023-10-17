import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderOut = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-4 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm8-14H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h14ZM8 13a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z' />
  </svg>
);
export default SvgBorderOut;
