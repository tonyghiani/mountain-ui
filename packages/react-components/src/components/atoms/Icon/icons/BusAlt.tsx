import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBusAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.5 2h-12a3 3 0 0 0-3 3v12a3 3 0 0 0 2 2.82V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 2-2.82V5a3 3 0 0 0-3-3Zm-13 6h6v4h-6Zm14 9a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h6Zm0-6h-14V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-3.38 10.92a1 1 0 0 0 .38.08 1 1 0 0 0 1-1 1.36 1.36 0 0 0 0-.2.64.64 0 0 0-.06-.18.76.76 0 0 0-.09-.18 1.58 1.58 0 0 0-.12-.15l-.15-.12a.76.76 0 0 0-.18-.09.64.64 0 0 0-.2-.08 1 1 0 0 0-.91.27 1.58 1.58 0 0 0-.12.15.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.36 1.36 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .31.24Zm-8 0a1 1 0 0 0 .38.08 1 1 0 0 0 1-1 1.36 1.36 0 0 0 0-.2.64.64 0 0 0-.06-.18.76.76 0 0 0-.09-.18 1.58 1.58 0 0 0-.12-.15l-.15-.12-.18-.09-.2-.08a1 1 0 0 0-.91.27 1.58 1.58 0 0 0-.12.15.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.36 1.36 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .31.24Z' />
  </svg>
);
export default SvgBusAlt;
