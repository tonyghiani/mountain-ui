import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanoramaHAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.46 5.83A1 1 0 0 0 20.7 5h-.11A37.49 37.49 0 0 0 3.41 5H3.3a1 1 0 0 0-.76.8 35.52 35.52 0 0 0 0 12.34 1 1 0 0 0 .76.8h.11A37.62 37.62 0 0 0 12 20a37.62 37.62 0 0 0 8.59-1h.11a1 1 0 0 0 .76-.8 35.52 35.52 0 0 0 0-12.37ZM19.6 17.17a35.42 35.42 0 0 1-15.2 0 33.2 33.2 0 0 1 0-10.34 35.42 35.42 0 0 1 15.2 0 33.2 33.2 0 0 1 0 10.34Z' />
  </svg>
);
export default SvgPanoramaHAlt;
