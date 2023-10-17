import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSurprise = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM10 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm5-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3 3a3.39 3.39 0 0 0-3.25 3.5A3.39 3.39 0 0 0 12 18a3.39 3.39 0 0 0 3.25-3.5A3.39 3.39 0 0 0 12 11Zm0 5a1.39 1.39 0 0 1-1.25-1.5A1.39 1.39 0 0 1 12 13a1.39 1.39 0 0 1 1.25 1.5A1.39 1.39 0 0 1 12 16Z' />
  </svg>
);
export default SvgSurprise;
