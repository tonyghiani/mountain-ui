import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospital = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.5 16.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-5 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm14-6h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1Zm-1 14h-17v-12h3a1 1 0 0 0 1-1v-4h9v4a1 1 0 0 0 1 1h3Zm-4-8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-3-5.5H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2Zm4 9.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgHospital;
