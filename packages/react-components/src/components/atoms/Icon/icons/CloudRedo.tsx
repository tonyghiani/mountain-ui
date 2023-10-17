import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudRedo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15 12.5a1 1 0 0 0-.91.6 4 4 0 1 0 .55 6.4 1 1 0 1 0-1.32-1.5 2 2 0 0 1-1.32.5 2 2 0 1 1 1-3.75h-.22a1 1 0 0 0 0 2H15a1 1 0 0 0 1-1V13.5a1 1 0 0 0-1-1Zm3.42-4.78A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66 1.13 1.13 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78Z' />
  </svg>
);
export default SvgCloudRedo;
