import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocumentLayoutLeft = ({
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
    <path d='M3 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm1-6h4v4H4Zm9 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2Zm0 10H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm8-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgDocumentLayoutLeft;
