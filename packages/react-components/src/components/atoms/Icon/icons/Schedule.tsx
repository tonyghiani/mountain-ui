import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSchedule = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 14a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-5 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM7 14a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z' />
  </svg>
);
export default SvgSchedule;
