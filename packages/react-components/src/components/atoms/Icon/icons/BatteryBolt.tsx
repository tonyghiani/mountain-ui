import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBatteryBolt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M6.69 15H4V9h2.31a1 1 0 0 0 0-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.69a1 1 0 1 0 0-2Zm7.2-2.56a1.27 1.27 0 0 0 .06-.18 1.42 1.42 0 0 0 0-.2v-.18a.65.65 0 0 0-.05-.2.89.89 0 0 0-.08-.17.86.86 0 0 0-.1-.16l-.16-.13-.09-.09h-.06l-.18-.06h-3.5l1.45-2.5a1 1 0 1 0-1.74-1l-2.31 4v.06a1.27 1.27 0 0 0-.06.18 1.42 1.42 0 0 0 0 .2S7 12 7 12v.12a.65.65 0 0 0 .05.2.89.89 0 0 0 .08.17.86.86 0 0 0 .1.16l.16.13a.76.76 0 0 0 .09.09h.16A1 1 0 0 0 8 13h3.27l-1.45 2.5a1 1 0 0 0 1.74 1l2.31-4s.01-.04.02-.06ZM21 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-4-3h-2.69a1 1 0 0 0 0 2H17v6h-2.31a1 1 0 1 0 0 2H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z' />
  </svg>
);
export default SvgBatteryBolt;
