import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFastMail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M4.79 10.5h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2Zm16.78-2.84V7.6a3 3 0 0 0-2.37-1.1h-7.93a3 3 0 0 0-2 .74A2.93 2.93 0 0 0 8.31 9l-.88 5a3 3 0 0 0 .66 2.45 3 3 0 0 0 2.29 1.07h7.94a3 3 0 0 0 3-2.48l.88-5a3 3 0 0 0-.63-2.38Zm-2.74.84-3.4 2.76a1 1 0 0 1-1.38-.12L11.72 8.5Zm.48 6.17a1 1 0 0 1-1 .83h-7.93a1 1 0 0 1-.76-.36 1 1 0 0 1-.22-.81l.8-4.53 2.35 2.66a3 3 0 0 0 4.14.35L20.13 10ZM5.79 6.5h-3a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgFastMail;
