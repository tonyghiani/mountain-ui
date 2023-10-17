import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTornado = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10 21H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm1-4H6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm7-15a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1Zm3 3H6a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2Zm-2 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2Zm-5 4H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgTornado;
