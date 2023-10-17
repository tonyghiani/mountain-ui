import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMedal = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.38 5.76a1 1 0 0 0-.47-.61l-5.2-3a1 1 0 0 0-1.37.36L12 6.57 9.66 2.51a1 1 0 0 0-1.37-.36l-5.2 3a1 1 0 0 0-.47.61 1 1 0 0 0 .1.75l4 6.83A5.91 5.91 0 0 0 6 16a6 6 0 1 0 11.34-2.72l3.9-6.76a1 1 0 0 0 .14-.76ZM5 6.38l3.46-2L11.68 10A5.94 5.94 0 0 0 8 11.58ZM12 20a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 1 1 0 8Zm4-8.45a5.9 5.9 0 0 0-1.86-1.15l-.98-1.83 2.42-4.19 3.46 2Z' />
  </svg>
);
export default SvgMedal;
