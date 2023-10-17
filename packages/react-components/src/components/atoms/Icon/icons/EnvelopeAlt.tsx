import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM5 6h14a1 1 0 0 1 1 1l-8 4.88L4 7a1 1 0 0 1 1-1Zm15 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.28l7.48 4.57a1 1 0 0 0 1 0L20 9.28Z' />
  </svg>
);
export default SvgEnvelopeAlt;
