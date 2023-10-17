import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.53 7.15a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9a3 3 0 0 0 3-2.89l3.56 1.78A1 1 0 0 0 21 17a1 1 0 0 0 .53-.15A1 1 0 0 0 22 16V8a1 1 0 0 0-.47-.85ZM15 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1Zm5-.62-3-1.5v-1.76l3-1.5Z' />
  </svg>
);
export default SvgVideo;
