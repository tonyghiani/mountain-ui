import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMedicalDrip = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17 6h-2V4h2a1 1 0 0 0 0-2H9a5 5 0 0 0-5 5v14a1 1 0 0 0 2 0V7a3 3 0 0 1 3-3h4v2h-2a3 3 0 0 0-3 3v4.93a3 3 0 0 0 1.34 2.5L11 17.54V18a2 2 0 0 0 2 2v1a1 1 0 0 0 2 0v-1a2 2 0 0 0 2-2v-.46l1.66-1.11a3 3 0 0 0 1.34-2.5V9a3 3 0 0 0-3-3Zm-1 5h2v1h-1a1 1 0 0 0 0 2h1a1 1 0 0 1-.44.76l-2.1 1.41A1 1 0 0 0 15 17v1h-2v-1a1 1 0 0 0-.45-.83l-2.1-1.41a1 1 0 0 1-.45-.83V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h-2a1 1 0 0 0 0 2Z' />
  </svg>
);
export default SvgMedicalDrip;
