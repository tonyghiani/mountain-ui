import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculatorAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M5.5 8H6v.5a1 1 0 0 0 2 0V8h.5a1 1 0 0 0 0-2H8v-.5a1 1 0 0 0-2 0V6h-.5a1 1 0 0 0 0 2Zm-.62 11.12a1 1 0 0 0 1.41 0l.71-.71.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41L8.41 17l.71-.71a1 1 0 0 0-1.41-1.41l-.71.71-.71-.71a1 1 0 0 0-1.41 1.41l.71.71-.71.71a1 1 0 0 0 0 1.41ZM20 1H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm-9 20H4a1 1 0 0 1-1-1v-7h8Zm0-10H3V4a1 1 0 0 1 1-1h7Zm10 9a1 1 0 0 1-1 1h-7v-8h8Zm0-9h-8V3h7a1 1 0 0 1 1 1Zm-5.5 5.5h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2Zm3-10.5h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm-3 13.5h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2Z' />
  </svg>
);
export default SvgCalculatorAlt;
