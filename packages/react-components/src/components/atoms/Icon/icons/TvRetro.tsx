import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTvRetro = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.54l-1.17-2a1 1 0 1 0-1.74 1L10 6H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgTvRetro;
