import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoneyBillSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M6 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm5.86-1.55L4.71 2.29a1 1 0 0 0-1.42 1.42L4.59 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14.59l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-.74 2.09 1.34 1.34A1 1 0 0 1 12 13a1 1 0 0 1-1-1 1 1 0 0 1 .12-.46ZM4 17a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.59l3.1 3.1A3 3 0 0 0 9 12a3 3 0 0 0 3 3 3 3 0 0 0 1.9-.69L16.59 17ZM20 5h-7.34a1 1 0 0 0 0 2H20a1 1 0 0 1 1 1v7.34a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3Zm-1 7a1 1 0 1 0-1 1 1 1 0 0 0 1-1Z' />
  </svg>
);
export default SvgMoneyBillSlash;
