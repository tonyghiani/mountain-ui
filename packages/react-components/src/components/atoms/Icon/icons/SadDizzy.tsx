import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSadDizzy = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m9 11.71.29-.3.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29.3-.29a1 1 0 0 0-1.46-1.42l-.29.3-.25-.3a1 1 0 1 0-1.46 1.42l.3.29-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0Zm-.6 3.62a1 1 0 0 0-.13 1.4 1 1 0 0 0 1.41.13 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.4 5.81 5.81 0 0 0-7.32 0ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm5-11.71a1 1 0 0 0-1.42 0l-.29.3-.29-.3a1 1 0 0 0-1.42 1.42l.3.29-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.29-.3.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29.3-.29a1 1 0 0 0 0-1.42Z' />
  </svg>
);
export default SvgSadDizzy;
