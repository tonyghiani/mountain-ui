import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindMoon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 19H7a1 1 0 0 0 0 2h5a1.013 1.013 0 0 1 1 1 1 1 0 0 0 2 0 3.003 3.003 0 0 0-3-3Zm2-10a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm4 0h2a3.003 3.003 0 0 0 3-3 1 1 0 0 0-2 0 1.013 1.013 0 0 1-1 1h-2a1 1 0 0 0 0 2Zm2 6h-2.161a8.043 8.043 0 0 0 1.146-2.95 1 1 0 0 0-1.305-1.117 5.97 5.97 0 0 1-1.92.317A6.062 6.062 0 0 1 9.7 5.2a7.155 7.155 0 0 1 .098-1.049A1 1 0 0 0 8.49 3.053 8.032 8.032 0 0 0 4.266 15H3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H6.83a6.028 6.028 0 0 1 .882-9.36 8.065 8.065 0 0 0 8.048 7.61 7.878 7.878 0 0 0 .789-.04A6.027 6.027 0 0 1 15.277 15H12a1 1 0 0 0 0 2h8a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6ZM2.62 19.08a1.147 1.147 0 0 0-.33.21A1.028 1.028 0 0 0 2 20a.99.99 0 0 0 1.38.92 1.16 1.16 0 0 0 .33-.21A.993.993 0 0 0 4 20a1.052 1.052 0 0 0-.29-.71 1.002 1.002 0 0 0-1.09-.21Z' />
  </svg>
);
export default SvgWindMoon;
