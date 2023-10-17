import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeRedo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.5 14.26a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V9.67l5.88 5.88a3 3 0 0 0 2.11.88 3 3 0 0 0 2.16-.91 1 1 0 0 0 0-1.39 1 1 0 0 0-1.43 0 1 1 0 0 1-1.4 0L4.91 8.26H9.5a1 1 0 0 0 0-2h-5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm1-11a1 1 0 0 0-1 1 5 5 0 1 0-3 9A5 5 0 0 0 20.8 12a1 1 0 0 0-1.32-1.51 3 3 0 1 1 .25-4.24H18.5a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-.99Z' />
  </svg>
);
export default SvgEnvelopeRedo;
