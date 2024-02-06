import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgStreering = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M12 12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m9.71-2.36a10 10 0 0 0-19.4 0 9.75 9.75 0 0 0 0 4.72 10 10 0 0 0 7.3 7.34 9.7 9.7 0 0 0 4.7 0 10 10 0 0 0 7.31-7.31 9.75 9.75 0 0 0 0-4.72ZM12 4a8 8 0 0 1 7.41 5H4.59A8 8 0 0 1 12 4m-8 8a8 8 0 0 1 .07-1H6v2H4.07A8 8 0 0 1 4 12m5 7.41A8 8 0 0 1 4.59 15H7a2 2 0 0 1 2 2Zm4 .52a8 8 0 0 1-1 .07 8 8 0 0 1-1-.07V18h2Zm.14-3.93h-2.28A4 4 0 0 0 8 13.14V11h8v2.14A4 4 0 0 0 13.14 16M15 19.41V17a2 2 0 0 1 2-2h2.41A8 8 0 0 1 15 19.41M19.93 13H18v-2h1.93a8 8 0 0 1 .07 1 8 8 0 0 1-.07 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgStreering);
export default ForwardRef;
