import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExchangeAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m21.71 9.29-4-4a1 1 0 0 0-1.42 1.42L18.59 9H7a1 1 0 0 0 0 2h14a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09ZM17 13H3a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 15H17a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgExchangeAlt;
