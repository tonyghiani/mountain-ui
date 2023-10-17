import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeDown = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.83 9.17a1 1 0 1 0-1.42 1.42A2 2 0 0 1 18 12a2 2 0 0 1-.71 1.53 1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.12A4 4 0 0 0 20 12a4.06 4.06 0 0 0-1.17-2.83Zm-4.4-5.07a1 1 0 0 0-1 .12L8.65 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 14 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 15 19V5a1 1 0 0 0-.57-.9ZM13 16.92l-3.38-2.7A1 1 0 0 0 9 14H6v-4h3a1 1 0 0 0 .62-.22L13 7.08Z' />
  </svg>
);
export default SvgVolumeDown;
