import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompress = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M16 9h5a1 1 0 0 0 0-2h-4V3a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1Zm-8 6H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1ZM8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm13 13h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgCompress;
