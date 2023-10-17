import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudDataConnection = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 18.5h-6.18A3 3 0 0 0 13 16.68V13.5h3.17a4.33 4.33 0 0 0 1.3-8.5A6 6 0 0 0 6.06 6.63 3.5 3.5 0 0 0 7 13.5h4v3.18a3 3 0 0 0-1.82 1.82H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2Zm-14-7a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 7.79-1.29 1 1 0 0 0 .78.67 2.31 2.31 0 0 1 1.93 2.29 2.34 2.34 0 0 1-2.33 2.33Zm5 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z' />
  </svg>
);
export default SvgCloudDataConnection;
