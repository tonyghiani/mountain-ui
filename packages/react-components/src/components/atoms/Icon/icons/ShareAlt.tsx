import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShareAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35A4 4 0 1 0 14 6a4.17 4.17 0 0 0 .07.71L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4.17 4.17 0 0 0 14 18a4 4 0 1 0 4-4Zm0-10a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm12 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z' />
  </svg>
);
export default SvgShareAlt;
