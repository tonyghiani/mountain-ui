import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSigma = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name=''
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M16 16h-5.59l3.3-3.29a1 1 0 0 0 0-1.42L10.41 8H16a1 1 0 0 0 0-2H8a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l4.3 4.29-4.3 4.29a1 1 0 0 0-.21 1.09A1 1 0 0 0 8 18h8a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgSigma;
