import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInbox = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.056 2h-14a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-14 2h14a1.001 1.001 0 0 1 1 1v8H17.59a1.997 1.997 0 0 0-1.664.89L14.52 16H9.59l-1.406-2.11A1.997 1.997 0 0 0 6.52 13H4.056V5a1.001 1.001 0 0 1 1-1Zm14 16h-14a1.001 1.001 0 0 1-1-1v-4H6.52l1.406 2.11A1.997 1.997 0 0 0 9.59 18h4.93a1.997 1.997 0 0 0 1.664-.89L17.59 15h2.465v4a1.001 1.001 0 0 1-1 1Z' />
  </svg>
);
export default SvgInbox;
