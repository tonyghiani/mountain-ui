import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPathfinderUnite = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 7.54h-4.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12.46a1 1 0 0 0 1 1h4.54V21a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V8.54a1 1 0 0 0-1-1ZM20 20H9.54v-4.54a1 1 0 0 0-1-1H4V4h10.46v4.54a1 1 0 0 0 1 1H20Z' />
  </svg>
);
export default SvgPathfinderUnite;
