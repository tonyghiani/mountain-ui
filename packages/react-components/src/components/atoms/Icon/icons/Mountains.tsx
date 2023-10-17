import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountains = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.85 17.47-5-8a1 1 0 0 0-1.7 0l-1 1.63-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 19h18a1 1 0 0 0 .85-1.53ZM10.45 17H4.74L10 8l2.93 5Zm2.35 0 2.2-3.43 1-1.68L19.2 17Z' />
  </svg>
);
export default SvgMountains;
