import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretRight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m19.5 11.13-14-8.08a1 1 0 0 0-1 0 1 1 0 0 0-.5.87v16.16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0l14-8.08a1 1 0 0 0 0-1.74ZM6 18.35V5.65L17 12Z' />
  </svg>
);
export default SvgCaretRight;
