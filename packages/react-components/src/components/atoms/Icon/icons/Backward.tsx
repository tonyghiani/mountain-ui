import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackward = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.67 5.85a2.63 2.63 0 0 0-2.67 0l-4 2.3a2.67 2.67 0 0 0-4-2.31L3.33 9.69a2.67 2.67 0 0 0 0 4.62L10 18.16a2.66 2.66 0 0 0 2.67 0A2.65 2.65 0 0 0 14 15.85l4 2.31a2.69 2.69 0 0 0 1.33.36 2.61 2.61 0 0 0 1.34-.37 2.63 2.63 0 0 0 1.33-2.3v-7.7a2.63 2.63 0 0 0-1.33-2.3Zm-8.67 10a.66.66 0 0 1-.33.58.69.69 0 0 1-.67 0l-6.67-3.85a.67.67 0 0 1 0-1.16L11 7.57a.67.67 0 0 1 .67 0 .66.66 0 0 1 .33.58Zm8 0a.67.67 0 0 1-1 .57l-5-2.88v-3.08l5-2.88a.67.67 0 0 1 1 .57Z' />
  </svg>
);
export default SvgBackward;
