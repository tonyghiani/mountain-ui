import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLabelAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15 12a1 1 0 1 0 1-1 1 1 0 0 0-1 1Zm6.71-.71-5-5A1 1 0 0 0 16 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a1 1 0 0 0 .71-.29l5-5a1 1 0 0 0 0-1.42ZM15.59 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10.59l4 4Z' />
  </svg>
);
export default SvgLabelAlt;
