import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSanitizerAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M14 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm2-7V5a1 1 0 0 0-1-1h-1V3h1a1 1 0 0 0 0-2h-4.764a4.593 4.593 0 0 0-4.13 2.553 1 1 0 0 0 1.789.894A2.603 2.603 0 0 1 10.235 3H12v1h-1a1 1 0 0 0-1 1v3a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3Zm-4-2h2v2h-2Zm5 14a1.001 1.001 0 0 1-1 1h-6a1.001 1.001 0 0 1-1-1v-9a1.001 1.001 0 0 1 1-1h6a1.001 1.001 0 0 1 1 1Z' />
  </svg>
);
export default SvgSanitizerAlt;
