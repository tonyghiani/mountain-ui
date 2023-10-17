import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMegaphone = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.991 2.002a1 1 0 0 0-1 1v.637a9.036 9.036 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a1 1 0 0 0 .92 1.394h4a.999.999 0 0 0 .918-.606l2.724-6.356a9.028 9.028 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a1 1 0 0 0-1-1Zm-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4Zm2.341 7H6.508l2.142-5h1.825Zm10.66-4.478a11.052 11.052 0 0 0-7-2.522h-3v-4h3a11.053 11.053 0 0 0 7-2.522Z' />
  </svg>
);
export default SvgMegaphone;
