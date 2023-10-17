import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderInner = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM4 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM20 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-4-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm4 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM4 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm16 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm5-7a1 1 0 0 0-1-1h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 1-1ZM8 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgBorderInner;
