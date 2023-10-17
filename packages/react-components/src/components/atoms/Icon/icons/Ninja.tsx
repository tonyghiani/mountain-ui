import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNinja = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m19.44 5.34-.06-.07a10 10 0 0 0-14.76 0l-.06.07A10 10 0 1 0 22 12a9.93 9.93 0 0 0-2.56-6.66ZM12 4a7.87 7.87 0 0 1 3.86 1H8.14A7.87 7.87 0 0 1 12 4ZM5.76 7h12.48a8 8 0 0 1 1.69 4H4.07a8 8 0 0 1 1.69-4ZM12 20a8 8 0 0 1-7.93-7h15.86A8 8 0 0 1 12 20ZM8 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm6 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3 9.93a1 1 0 0 0 .49.13 1 1 0 0 0 .87-.51A3 3 0 0 1 15 16a1 1 0 0 0 0-2 5 5 0 0 0-4.37 2.57 1 1 0 0 0 .37 1.36Z' />
  </svg>
);
export default SvgNinja;
