import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerticalDistributionCenter = ({
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
    <path d='M21 15h-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2H3a1 1 0 0 0 0 2h1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h1a1 1 0 0 0 0-2Zm-3 3H6v-4h12ZM3 8h2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2Zm4-2h10v2H7Z' />
  </svg>
);
export default SvgVerticalDistributionCenter;
