import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWrapText = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm6 8H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm9.5-5H3a1 1 0 0 0 0 2h15.5a1.5 1.5 0 0 1 0 3h-3.09l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29h3.09a3.5 3.5 0 0 0 0-7Z' />
  </svg>
);
export default SvgWrapText;
