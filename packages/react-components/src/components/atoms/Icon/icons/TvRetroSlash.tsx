import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTvRetroSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11.62 7.92A1 1 0 0 0 12 8h6a1 1 0 0 1 1 1v5.34a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .54.54Zm10.09 12.37-18-18a1 1 0 0 0-1.42 1.42l2.54 2.53A3 3 0 0 0 3 9v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3.07 3.07 0 0 0 .53-.06l1.76 1.77a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 18a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.59l10 10Z' />
  </svg>
);
export default SvgTvRetroSlash;
