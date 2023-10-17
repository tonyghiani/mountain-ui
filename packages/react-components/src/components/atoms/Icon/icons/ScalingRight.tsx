import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScalingRight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59L12 10.59 9.88 8.46a1 1 0 0 0-1.42 1.42L10.59 12 4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41L12 13.41l2.12 2.13a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L13.41 12 20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z' />
  </svg>
);
export default SvgScalingRight;
