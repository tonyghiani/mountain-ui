import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserExclamation = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M14.55 12.22a4.92 4.92 0 0 0 1.7-3.72 5 5 0 0 0-10 0A4.92 4.92 0 0 0 8 12.22a8 8 0 0 0-4.7 7.28 1 1 0 0 0 2 0 6 6 0 0 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.75-7.28Zm-3.3-.72a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm8.5-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1ZM19 11.79a1.05 1.05 0 0 0-.29.71 1 1 0 0 0 .29.71 1.15 1.15 0 0 0 .33.21.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54.84.84 0 0 0 .08-.38 1 1 0 0 0-1.71-.71Z' />
  </svg>
);
export default SvgUserExclamation;
