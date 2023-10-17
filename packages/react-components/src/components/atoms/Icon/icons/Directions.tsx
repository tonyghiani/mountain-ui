import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirections = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.12 9.88-7-7a3.08 3.08 0 0 0-4.24 0l-7 7a3 3 0 0 0 0 4.24l7 7a3 3 0 0 0 4.24 0l7-7a3 3 0 0 0 0-4.24Zm-1.41 2.83-7 7a1 1 0 0 1-1.42 0l-7-7a1 1 0 0 1 0-1.42l7-7a1 1 0 0 1 1.42 0l7 7a1 1 0 0 1 0 1.42Zm-5.5-3.42a1 1 0 0 0-1.42 1.42l.3.29H9.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h2.59l-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.42Z' />
  </svg>
);
export default SvgDirections;
