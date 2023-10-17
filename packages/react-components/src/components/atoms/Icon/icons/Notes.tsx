import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotes = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M16 14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm4-6h-3V3a1 1 0 0 0-2 0v1h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1Zm-1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2Z' />
  </svg>
);
export default SvgNotes;
