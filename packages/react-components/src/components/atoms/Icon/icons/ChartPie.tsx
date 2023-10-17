import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartPie = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 2a10 10 0 1 0 4.93 18.69H17.05A10 10 0 0 0 12 2Zm1 2.07A8 8 0 0 1 19.93 11H13ZM12 20a8 8 0 0 1-1-15.93V12a1.09 1.09 0 0 0 .07.35V12.5l4 6.87A7.81 7.81 0 0 1 12 20Zm4.83-1.64L13.73 13h6.2a8 8 0 0 1-3.1 5.36Z' />
  </svg>
);
export default SvgChartPie;
