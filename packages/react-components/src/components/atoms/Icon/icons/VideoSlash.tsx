import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m7.71 6.29-4-4a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h9a3 3 0 0 0 1.9-.69l4.39 4.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM14 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l7.87 7.88A1 1 0 0 1 14 16Zm7.53-8.85a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6h-1.34a1 1 0 0 0 0 2H14a1 1 0 0 1 1 1v1.5a1.62 1.62 0 0 0 0 .19.65.65 0 0 0 .05.2s.05.06.07.1a1 1 0 0 0 .15.21s.1.06.15.1l.17.11a.85.85 0 0 0 .23 0 .7.7 0 0 0 .14 0 1.62 1.62 0 0 0 .19 0 .65.65 0 0 0 .2-.05L20 9.62v5.72a1 1 0 1 0 2 0V8a1 1 0 0 0-.47-.85Z' />
  </svg>
);
export default SvgVideoSlash;
