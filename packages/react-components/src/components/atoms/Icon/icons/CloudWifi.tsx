import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudWifi = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8.5 5.94a7.1 7.1 0 0 1 7 0 1 1 0 0 0 1.37-.37 1 1 0 0 0-.37-1.36 9.14 9.14 0 0 0-9 0 1 1 0 0 0-.37 1.36 1 1 0 0 0 1.37.37Zm9.92 5.27a5.91 5.91 0 0 0-.36-.71 1 1 0 0 0-1.38-.33 1 1 0 0 0-.33 1.37 4.58 4.58 0 0 1 .38.84 1 1 0 0 0 .78.67A3 3 0 0 1 20 16a3 3 0 0 1-3 3H5.66A2 2 0 0 1 4 17.4 2 2 0 0 1 6 15a1 1 0 0 0 1-1 4.92 4.92 0 0 1 .67-2.49 1 1 0 0 0-.37-1.37 1 1 0 0 0-1.36.37 6.75 6.75 0 0 0-.88 2.6 4 4 0 0 0-2.13 1.33A4 4 0 0 0 5.46 21H17a5 5 0 0 0 1.42-9.79ZM14.87 9v-.06a.92.92 0 0 0 .13-.2 1 1 0 0 0-.57-1.29 6.36 6.36 0 0 0-1.74-.38h-.3a5.47 5.47 0 0 0-.81 0 3 3 0 0 0-.31 0 6.36 6.36 0 0 0-1.74.38A1 1 0 0 0 9 8.74a1.22 1.22 0 0 0 .12.19.61.61 0 0 0 0 .11 1 1 0 0 0 1.37.36 3.08 3.08 0 0 1 3 0 1 1 0 0 0 1.38-.4ZM11 12a1 1 0 1 0 1-1 1 1 0 0 0-1 1Z' />
  </svg>
);
export default SvgCloudWifi;
