import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrowser = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 2H9a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-3 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h12Zm0-9H4V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm4 5a1 1 0 0 1-1 1h-1V9a3 3 0 0 0-.18-1H20Zm0-9H8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgBrowser;
