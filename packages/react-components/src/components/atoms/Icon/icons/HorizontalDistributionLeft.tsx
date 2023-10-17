import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHorizontalDistributionLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11 4H6V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 14H6V6h4Zm9-13h-3V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-1 12h-2V7h2Z' />
  </svg>
);
export default SvgHorizontalDistributionLeft;
