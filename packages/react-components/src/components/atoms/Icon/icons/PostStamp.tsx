import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPostStamp = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M22.5 5.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1 1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1 1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1Zm-1-1.79a2.5 2.5 0 0 0 0 4.58v1.42a2.5 2.5 0 0 0 0 4.58v1.42a2.5 2.5 0 0 0 0 4.58v1.21h-1.21a2.5 2.5 0 0 0-4.58 0h-1.42a2.5 2.5 0 0 0-4.58 0H8.29a2.5 2.5 0 0 0-4.58 0H2.5v-1.21a2.5 2.5 0 0 0 0-4.58v-1.42a2.5 2.5 0 0 0 0-4.58V8.29a2.5 2.5 0 0 0 0-4.58V2.5h1.21a2.5 2.5 0 0 0 4.58 0h1.42a2.5 2.5 0 0 0 4.58 0h1.42a2.5 2.5 0 0 0 4.58 0h1.21ZM12 5a7 7 0 0 0 0 14 6.93 6.93 0 0 0 3.5-.94 1 1 0 1 0-1-1.73A5 5 0 1 1 17 12v.5a.83.83 0 0 1-.83.83.84.84 0 0 1-.84-.83V9.67a1 1 0 0 0-1.78-.6 3.25 3.25 0 0 0-1.55-.4 3.33 3.33 0 0 0 0 6.66 3.28 3.28 0 0 0 2.17-.82 2.84 2.84 0 0 0 4.83-2V12a7 7 0 0 0-7-7Zm0 8.33A1.33 1.33 0 1 1 13.33 12 1.32 1.32 0 0 1 12 13.33Z' />
  </svg>
);
export default SvgPostStamp;
