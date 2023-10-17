import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleDrive = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.423 13.888-6.09-10.55H8.668l6.09 10.55ZM8.09 4.338 2 14.888l3.334 5.774 6.089-10.55Zm1.733 10.55-3.333 5.774h12.178L22 14.887Z' />
  </svg>
);
export default SvgGoogleDrive;
