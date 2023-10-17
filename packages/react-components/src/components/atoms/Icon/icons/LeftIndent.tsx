import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeftIndent = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm0 4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18.77-1.31a1 1 0 0 0-1.41-.12l-2 1.66a1 1 0 0 0 0 1.54l2 1.66a1 1 0 0 0 .64.24 1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-1.08-.9 1.08-.9a1 1 0 0 0 .13-1.41ZM21 17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Z' />
  </svg>
);
export default SvgLeftIndent;
