import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRaindrops = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.5 8c0-3.49-3.3-5.74-3.44-5.83a1 1 0 0 0-1.12 0C5.8 2.27 2.5 4.55 2.5 8a4 4 0 0 0 8 0Zm-4 2a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72A5.39 5.39 0 0 1 8.5 8a2 2 0 0 1-2 2Zm11.56-7.83a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 0 0 8 0c0-3.49-3.3-5.74-3.44-5.83ZM17.5 10a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.39 5.39 0 0 1 2 3.72 2 2 0 0 1-2 2Zm-4.44 2.17a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 0 0 8 0c0-3.49-3.3-5.74-3.44-5.83ZM12.5 20a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.39 5.39 0 0 1 2 3.72 2 2 0 0 1-2 2Z' />
  </svg>
);
export default SvgRaindrops;
