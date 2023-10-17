import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTablet = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-5.29-2.71a1 1 0 0 0-.91-.29l-.18.06a.76.76 0 0 0-.18.09l-.15.12a1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.46 1.46 0 0 0 .33.22 1 1 0 0 0 1.09-.22A1 1 0 0 0 13 17a.84.84 0 0 0-.08-.38 1.15 1.15 0 0 0-.21-.33Z' />
  </svg>
);
export default SvgTablet;
