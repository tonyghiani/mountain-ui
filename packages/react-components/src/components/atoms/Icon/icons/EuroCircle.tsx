import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEuroCircle = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm.59-13.33a3.34 3.34 0 0 1 2.62 1.38 1 1 0 0 0 1.4.19 1 1 0 0 0 .18-1.41 5.32 5.32 0 0 0-4.2-2.16A5.57 5.57 0 0 0 7.46 9.5H6a1 1 0 0 0 0 2h1v1H6a1 1 0 0 0 0 2h1.46a5.57 5.57 0 0 0 5.13 3.83 5.32 5.32 0 0 0 4.2-2.16A1 1 0 1 0 15.21 15a3.34 3.34 0 0 1-2.62 1.38 3.42 3.42 0 0 1-2.92-1.88H12a1 1 0 0 0 0-2H9.05A4.23 4.23 0 0 1 9 12a4.23 4.23 0 0 1 .05-.5H12a1 1 0 0 0 0-2H9.67a3.42 3.42 0 0 1 2.92-1.83Z' />
  </svg>
);
export default SvgEuroCircle;
