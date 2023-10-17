import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReceiptAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10 8h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Zm-2 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2ZM20 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1.6.8l2.07-1.55 2.06 1.55a1 1 0 0 0 1.2 0L12 20.25l2.07 1.55a1 1 0 0 0 1.2 0l2.06-1.55 2.07 1.55a1 1 0 0 0 1.05.09A1 1 0 0 0 21 21V3a1 1 0 0 0-1-1Zm-1 17-1.07-.8a1 1 0 0 0-1.2 0l-2.06 1.55-2.07-1.55a1 1 0 0 0-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 0 0-1.2 0L5 19V4h14Z' />
  </svg>
);
export default SvgReceiptAlt;
