import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlipV = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M7.6 15.18a1 1 0 0 0-1.42 1.42l1.06 1.06a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-3.79-5.4-1.06 1.06a.91.91 0 0 0-.19.26 1 1 0 0 0-.27 1.61l1.06 1.06a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L4.41 12l.81-.81a1 1 0 0 0-1.41-1.41Zm4.19.79a1 1 0 0 0-1 1v1.5a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1Zm13.71.72-5-5a1 1 0 0 0-1.09-.21A1 1 0 0 0 15 7v10a1 1 0 0 0 .62.92.84.84 0 0 0 .38.08 1 1 0 0 0 .71-.29l5-5a1 1 0 0 0 0-1.42ZM17 14.59V9.41L19.59 12ZM12 2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1ZM8.38 6.08a1 1 0 0 0-1.09.21L6.64 7a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.3 1 1 0 0 0 .45-.11A1 1 0 0 0 9 7.57V7a1 1 0 0 0-.62-.92Z' />
  </svg>
);
export default SvgFlipV;
