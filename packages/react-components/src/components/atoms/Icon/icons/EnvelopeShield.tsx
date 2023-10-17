import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeShield = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.63 5.12a1 1 0 0 0-.84-.2 2.74 2.74 0 0 1-2.2-.46 1 1 0 0 0-1.18 0 2.74 2.74 0 0 1-2.2.46A1 1 0 0 0 14 5.9v3.31a4.62 4.62 0 0 0 1.84 3.7l1.57 1.16a1 1 0 0 0 1.18 0l1.57-1.16A4.62 4.62 0 0 0 22 9.21V5.9a1 1 0 0 0-.37-.78ZM20 9.21a2.61 2.61 0 0 1-1 2.09l-1 .7-1-.72a2.61 2.61 0 0 1-1-2.09V7a4.67 4.67 0 0 0 2-.54A4.67 4.67 0 0 0 20 7Zm1 6a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.67l5.88 5.88a3 3 0 0 0 2.11.88 3 3 0 0 0 2.15-.9l-.7-.71-.74-.68a1 1 0 0 1-1.4 0L5.41 8.26H11a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgEnvelopeShield;
