import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompressAltLeft = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.5 5.5a1 1 0 0 0-1 1v1.59l-5.79-5.8a1 1 0 0 0-1.42 1.42l5.8 5.79H6.5a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54 1 1 0 0 0 .08-.38v-4a1 1 0 0 0-1-1Zm11.21 14.79-5.8-5.79h1.59a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54 1 1 0 0 0-.08.38v4a1 1 0 0 0 2 0v-1.59l5.79 5.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
  </svg>
);
export default SvgCompressAltLeft;
