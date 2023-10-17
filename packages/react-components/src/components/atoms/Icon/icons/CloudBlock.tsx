import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudBlock = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.42 7.72A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66 1.13 1.13 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78Zm-9.25 6a4 4 0 1 0 5.66 0 4.1 4.1 0 0 0-5.66-.05ZM10 16.5a2 2 0 0 1 2-2 2.09 2.09 0 0 1 .51.07L10.07 17a2.09 2.09 0 0 1-.07-.5Zm3.41 1.41a2 2 0 0 1-1.91.5L13.93 16a2.09 2.09 0 0 1 .07.51 2 2 0 0 1-.59 1.4Z' />
  </svg>
);
export default SvgCloudBlock;
