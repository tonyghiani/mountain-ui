import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSilence = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm1 3a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0 1 1 0 0 0 0 2 1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0 1 1 0 0 0 0-2ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z' />
  </svg>
);
export default SvgSilence;
