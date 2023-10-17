import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdjustAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.83 7.32a.2.2 0 0 0 0-.08 10 10 0 0 0-3.38-3.65A9.89 9.89 0 0 0 12 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h.28a10 10 0 0 0 8.55-14.68ZM13 4.06a8 8 0 0 1 2.49.74L13 9.12Zm0 9.06 4.17-7.22a7.89 7.89 0 0 1 1.58 1.83L13 17.69Zm1.16 6.57L19.75 10a8.36 8.36 0 0 1 .25 2 7.94 7.94 0 0 1-5.84 7.69Z' />
  </svg>
);
export default SvgAdjustAlt;
