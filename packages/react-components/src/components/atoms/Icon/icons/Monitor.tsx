import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitor = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2.64l-.58 1a2 2 0 0 0 0 2 2 2 0 0 0 1.75 1h6.46A2 2 0 0 0 17 21a2 2 0 0 0 0-2l-.59-1H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM8.77 20 10 18h4l1.2 2ZM20 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Zm0-3H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgMonitor;
