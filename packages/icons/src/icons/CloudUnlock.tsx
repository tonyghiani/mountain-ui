import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudUnlock = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M14 15.5h-3v-1a1 1 0 0 1 1.88-.5 1 1 0 0 0 1.37.34 1 1 0 0 0 .34-1.34 3.08 3.08 0 0 0-.46-.59A3 3 0 0 0 12 11.5a3 3 0 0 0-3 3v1.18a3 3 0 0 0 1 5.82h4a3 3 0 0 0 0-6Zm0 4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm4.42-12.78A7 7 0 0 0 5.06 8.61a4 4 0 0 0-.38 7.66 1.13 1.13 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 12.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 11.5a5 5 0 0 0-3.58-4.78Z' />
  </svg>
);
export default SvgCloudUnlock;
