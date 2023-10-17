import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentLock = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.92 16.13a1 1 0 0 0-1.37.37A7 7 0 0 1 11.5 20H5.91l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 4.07-11.91 1 1 0 1 0-.24-2 9 9 0 0 0-5.91 14.57l-1.68 1.67a1 1 0 0 0-.21 1.09 1 1 0 0 0 .92.62h8a9 9 0 0 0 7.79-4.5 1 1 0 0 0-.37-1.37Zm.58-9.95V5a3 3 0 0 0-6 0v1.18a3 3 0 0 0-2 2.82v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-2-2.82ZM15.5 5a1 1 0 0 1 2 0v1h-2Zm4 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgCommentLock;
