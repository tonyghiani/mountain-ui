import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRightIndentAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3.64 9.56a1 1 0 1 0-1.28 1.54l1.08.9-1.08.9a1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.13l2-1.67a1 1 0 0 0 0-1.54ZM9 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm4 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2Zm8 10h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0-8h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgRightIndentAlt;
