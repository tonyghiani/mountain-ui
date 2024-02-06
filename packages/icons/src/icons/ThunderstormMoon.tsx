import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgThunderstormMoon = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M11.58 16.5h-1.26l.86-1.5a1 1 0 1 0-1.73-1l-1.73 3a1 1 0 0 0 .86 1.5h1.27L9 20a1 1 0 0 0 1.74 1l1.73-3a1 1 0 0 0 0-1 1 1 0 0 0-.89-.5M21.7 7.57a1 1 0 0 0-.93-.26 3.2 3.2 0 0 1-.66.08 3 3 0 0 1-3-3 3 3 0 0 1 .08-.65A1 1 0 0 0 16 2.53a4.93 4.93 0 0 0-3.83 4.21 6.2 6.2 0 0 0-1.67-.24 6 6 0 0 0-5.94 5.13 3.49 3.49 0 0 0-.34 6.62 1 1 0 1 0 .72-1.86 1.5 1.5 0 0 1 .56-2.89 1 1 0 0 0 1-1 4 4 0 0 1 4-4 3.9 3.9 0 0 1 2.18.66 4 4 0 0 1 1.57 2 1 1 0 0 0 .78.67 2.33 2.33 0 0 1 .25 4.53 1 1 0 0 0 .27 2 .8.8 0 0 0 .27 0A4.33 4.33 0 0 0 19 14.17a4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 8.5a1 1 0 0 0-.3-.93m-4.59 2.82a2.6 2.6 0 0 1-.42 0A4.6 4.6 0 0 0 16 10a6 6 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.09' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgThunderstormMoon);
export default ForwardRef;
