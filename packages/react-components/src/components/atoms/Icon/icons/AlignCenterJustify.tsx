import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignCenterJustify = ({
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
    <path d='M21 15H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm14 14H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm4-12H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgAlignCenterJustify;
