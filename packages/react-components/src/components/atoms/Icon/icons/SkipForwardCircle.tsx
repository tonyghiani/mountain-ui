import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSkipForwardCircle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15.5 7a1 1 0 0 0-1 1v1.69l-4-2.31a2 2 0 0 0-3 1.73v5.78a2 2 0 0 0 1 1.73 2 2 0 0 0 2 0l4-2.31V16a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm-1 5-5 2.89V9.11l5 2.88ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z' />
  </svg>
);
export default SvgSkipForwardCircle;
