import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSyncSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.88 15.5h-4.5a1 1 0 0 0 0 2h2.4A8 8 0 0 1 12 20a8.08 8.08 0 0 1-3.12-.63l-1.49 1.49A9.83 9.83 0 0 0 12 22a10 10 0 0 0 6.88-2.77V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1Zm-1.57-8.4 1.43-1.43 2-2a1 1 0 1 0-1.42-1.42l-2 2A9.89 9.89 0 0 0 12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4a7.93 7.93 0 0 1 10.67-.81l-11.2 11.2A7.93 7.93 0 0 1 4 12a1 1 0 0 0-2 0 9.89 9.89 0 0 0 2.27 6.32l-2 2a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2 1.43-1.43Zm1.06 1.78A8.08 8.08 0 0 1 20 12a1 1 0 0 0 2 0 9.83 9.83 0 0 0-1.14-4.61Z' />
  </svg>
);
export default SvgSyncSlash;
