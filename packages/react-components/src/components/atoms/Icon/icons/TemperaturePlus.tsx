import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemperaturePlus = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.5 15.28V5.5a1 1 0 0 0-2 0v9.78a2 2 0 0 0-1 1.72 2 2 0 0 0 4 0 2 2 0 0 0-1-1.72Zm9-12.78H19V2a1 1 0 0 0-2 0v.5h-.5a1 1 0 0 0 0 2h.5V5a1 1 0 0 0 2 0v-.5h.5a1 1 0 0 0 0-2Zm-5.5 3a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83 7 7 0 0 0 1.28.17A6 6 0 0 0 14 13Zm-2 14.61a4 4 0 0 1-6.42-2.2 4 4 0 0 1 1.1-3.76 1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71 4 4 0 0 1-.28 6Z' />
  </svg>
);
export default SvgTemperaturePlus;
