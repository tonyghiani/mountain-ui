import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42L4 5.41V19a3 3 0 0 0 3 3h10a3 3 0 0 0 2.39-1.2l.9.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM17 20H7a1 1 0 0 1-1-1V7.41l11.93 11.93A1 1 0 0 1 17 20ZM8.66 4H12v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09L13.06 2h-4.4a1 1 0 0 0 0 2ZM14 5.41 16.59 8H15a1 1 0 0 1-1-1Z' />
  </svg>
);
export default SvgFileSlash;
