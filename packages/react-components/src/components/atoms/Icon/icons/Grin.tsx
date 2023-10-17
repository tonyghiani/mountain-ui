import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrin = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm3-7H9a1 1 0 0 0-1 1 4 4 0 0 0 8 0 1 1 0 0 0-1-1Zm-3 3a2 2 0 0 1-1.73-1h3.46A2 2 0 0 1 12 16Zm3-7a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgGrin;
