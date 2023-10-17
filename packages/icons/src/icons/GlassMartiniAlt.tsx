import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlassMartiniAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.78 3.62a1 1 0 0 0 .12-1.05A1 1 0 0 0 21 2H3a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1.05L11 14.6V20H5.25a1 1 0 0 0 0 2h13.5a1 1 0 0 0 0-2H13v-5.4ZM5.08 4h13.84l-2.4 3h-9ZM12 12.65 9.08 9h5.84Z' />
  </svg>
);
export default SvgGlassMartiniAlt;
