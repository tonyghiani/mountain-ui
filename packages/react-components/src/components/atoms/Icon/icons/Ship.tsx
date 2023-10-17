import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShip = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3.62 17.28a1 1 0 0 0 1.86-.74l-1.12-2.82L11 12.25V17a1 1 0 0 0 2 0v-4.75l6.64 1.47-1.12 2.82a1 1 0 0 0 .56 1.3 1 1 0 0 0 .37.07 1 1 0 0 0 .93-.63l1.55-3.91a1 1 0 0 0-.05-.84 1 1 0 0 0-.66-.51L18 11.31V7a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H7a1 1 0 0 0-1 1v4.31L2.78 12a1 1 0 0 0-.66.51 1 1 0 0 0-.05.84ZM11 4h2v2h-2ZM8 8h8v2.86L12.22 10H11.78L8 10.86Zm12.71 11.28a4.38 4.38 0 0 0-1 .45 2.08 2.08 0 0 1-2.1 0 4.62 4.62 0 0 0-4.54 0 2.14 2.14 0 0 1-2.12 0 4.64 4.64 0 0 0-4.54 0 2.08 2.08 0 0 1-2.1 0 4.38 4.38 0 0 0-1-.45A1 1 0 0 0 2 20a1 1 0 0 0 .67 1.24 2.1 2.1 0 0 1 .57.25 4 4 0 0 0 2 .55 4.14 4.14 0 0 0 2.08-.56 2.65 2.65 0 0 1 2.56 0 4.15 4.15 0 0 0 4.12 0 2.65 2.65 0 0 1 2.56 0 4 4 0 0 0 4.1 0 2.1 2.1 0 0 1 .57-.25A1 1 0 0 0 22 20a1 1 0 0 0-1.29-.72Z' />
  </svg>
);
export default SvgShip;
