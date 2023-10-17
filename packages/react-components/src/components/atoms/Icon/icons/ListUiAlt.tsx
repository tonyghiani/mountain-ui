import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgListUiAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm4 2h14a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm4 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm10-5h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgListUiAlt;
