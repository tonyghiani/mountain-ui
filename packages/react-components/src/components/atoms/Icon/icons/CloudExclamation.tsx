import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudExclamation = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.71 18.79a1.15 1.15 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.05 1.05 0 0 0-.29.71 1 1 0 0 0 .29.71 1.15 1.15 0 0 0 .33.21 1 1 0 0 0 1.3-1.3 1 1 0 0 0-.21-.33ZM12 12.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm6.42-4.79a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 17.5h2a1 1 0 0 0 0-2H6a2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66A3 3 0 0 1 17 15.5h-1a1 1 0 0 0 0 2h1a5 5 0 0 0 1.42-9.79Z' />
  </svg>
);
export default SvgCloudExclamation;
