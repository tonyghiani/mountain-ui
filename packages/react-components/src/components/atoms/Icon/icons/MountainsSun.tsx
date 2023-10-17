import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountainsSun = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-1.15 8.47a1 1 0 0 0-1.7 0l-1 1.63-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 22h18a1 1 0 0 0 .85-1.53ZM10.45 20H4.74L10 11l2.94 5-1.25 2Zm2.35 0 1.49-2.37.71-1.06 1-1.68L19.2 20Z' />
  </svg>
);
export default SvgMountainsSun;
