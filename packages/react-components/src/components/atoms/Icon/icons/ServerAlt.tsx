import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServerAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12 0a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 17v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 20 7Zm-2 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgServerAlt;
