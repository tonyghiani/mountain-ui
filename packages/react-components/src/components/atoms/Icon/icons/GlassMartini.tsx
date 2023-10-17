import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlassMartini = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18 20h-5v-5.06A9 9 0 0 0 21 6a8.72 8.72 0 0 0-.67-3.39 1 1 0 0 0-.22-.32L20 2.21a.92.92 0 0 0-.21-.13.94.94 0 0 0-.28-.08H4.5a.94.94 0 0 0-.29.06A2.12 2.12 0 0 0 4 2.2l-.12.09a1 1 0 0 0-.22.32A8.72 8.72 0 0 0 3 6a9 9 0 0 0 8 8.94V20H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2ZM5 6a6.91 6.91 0 0 1 .29-2h13.42A6.91 6.91 0 0 1 19 6 7 7 0 0 1 5 6Z' />
  </svg>
);
export default SvgGlassMartini;
