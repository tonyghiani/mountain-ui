import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWheelBarrow = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2h-2.3l-.16.07-.17.11a.8.8 0 0 0-.13.13 1 1 0 0 0-.1.16.7.7 0 0 0-.08.18v.09L17.38 6h-1.14l-3.12-3.11a3.06 3.06 0 0 0-4.24 0L5.76 6H3a1 1 0 0 0-.87.5 1 1 0 0 0 0 1l4 7-.77 1.5A2 2 0 0 0 5 16a3 3 0 1 0 3 3 3 3 0 0 0-.85-2.08l1-2 1.38-.14 3.94 5.91A2.93 2.93 0 0 0 16 22a3.2 3.2 0 0 0 1.13-.21 3 3 0 0 0 1.87-3.3L18 13l1.79-9H21a1 1 0 0 0 0-2M5 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1m5.3-15.71a1 1 0 0 1 1.4 0L13.41 6H8.59Zm-2.75 8.65L4.72 8H17l-.82 4.08Zm8.81 7a1 1 0 0 1-1.2-.38l-3.34-5 4.37-.43.81 4.69a1 1 0 0 1-.64 1.11Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWheelBarrow);
export default ForwardRef;
