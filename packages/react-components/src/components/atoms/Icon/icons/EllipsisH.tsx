import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEllipsisH = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z' />
  </svg>
);
export default SvgEllipsisH;
