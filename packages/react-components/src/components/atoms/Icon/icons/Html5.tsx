import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHtml5 = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m3.183 2 1.604 18 7.202 2 7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004-4.522-1.256-.31-3.466h2.216l.157 1.76 2.46.664h.001l2.463-.665.256-2.863H7.06L6.464 5.68h11.059Z' />
  </svg>
);
export default SvgHtml5;
