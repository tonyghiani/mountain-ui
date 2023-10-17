import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBitcoinCircle = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm2-14V6a1 1 0 0 0-2 0v1h-1V6a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3 3 3 0 0 0-.77-2 3 3 0 0 0 .77-2 3 3 0 0 0-3-3Zm0 8h-3v-2h3a1 1 0 0 1 0 2Zm0-4h-3V9h3a1 1 0 0 1 0 2Z' />
  </svg>
);
export default SvgBitcoinCircle;
