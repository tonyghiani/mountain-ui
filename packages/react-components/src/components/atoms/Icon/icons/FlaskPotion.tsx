import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlaskPotion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.93 11.67a.42.42 0 0 0 0-.1A7.4 7.4 0 0 0 15 7.62V4h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v3.62a7.4 7.4 0 0 0-3.89 4 .42.42 0 0 0 0 .1 7.5 7.5 0 1 0 13.86 0Zm-8.62-2.41a1 1 0 0 0 .69-.95V4h2v4.31a1 1 0 0 0 .69.95A5.43 5.43 0 0 1 16.23 11H7.77a5.43 5.43 0 0 1 2.54-1.74ZM12 20a5.51 5.51 0 0 1-5.5-5.5 5.34 5.34 0 0 1 .22-1.5h10.56a5.34 5.34 0 0 1 .22 1.5A5.51 5.51 0 0 1 12 20Zm2-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgFlaskPotion;
