import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlign = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm0-4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm0-4h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 10H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-1.36-7.43a1 1 0 1 0-1.28 1.53l1.08.9-1.08.9a1 1 0 0 0-.13 1.41 1 1 0 0 0 .77.36 1 1 0 0 0 .64-.24l2-1.66a1 1 0 0 0 0-1.54Z' />
  </svg>
);
export default SvgAlign;
