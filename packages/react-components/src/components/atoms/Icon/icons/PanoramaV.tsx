import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanoramaV = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17.27 12a21.11 21.11 0 0 1 1.64-8.58 1 1 0 0 0-.07-1A1 1 0 0 0 18 2H6a1 1 0 0 0-.84.46 1 1 0 0 0-.07 1A21.11 21.11 0 0 1 6.73 12a21.11 21.11 0 0 1-1.64 8.58 1 1 0 0 0 .07 1A1 1 0 0 0 6 22h12a1 1 0 0 0 .84-.46 1 1 0 0 0 .07-1A21.11 21.11 0 0 1 17.27 12Zm-.75 8h-9a24.77 24.77 0 0 0 1.25-8 24.77 24.77 0 0 0-1.29-8h9a24.77 24.77 0 0 0-1.25 8 24.77 24.77 0 0 0 1.29 8Z' />
  </svg>
);
export default SvgPanoramaV;
