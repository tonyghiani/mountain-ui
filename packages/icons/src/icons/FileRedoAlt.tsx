import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileRedoAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M14 13a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1Zm-3 7H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.18 1.18 0 0 0-.06-.27v-.09a.92.92 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.86.86 0 0 0-.32-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2Zm2-14.59L15.59 8H14a1 1 0 0 1-1-1ZM20 14a1 1 0 0 0-.91.6A4.07 4.07 0 0 0 17 14a4 4 0 1 0 2.64 7 1 1 0 0 0-1.32-1.51A2 2 0 0 1 17 20a2 2 0 1 1 1-3.75h-.22a1 1 0 0 0 0 2H20a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1ZM8 10h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm0 6a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgFileRedoAlt;
