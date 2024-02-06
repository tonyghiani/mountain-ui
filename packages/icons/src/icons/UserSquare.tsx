import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgUserSquare = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.81 12.28a3.73 3.73 0 0 0 1-2.5 3.78 3.78 0 0 0-7.56 0 3.73 3.73 0 0 0 1 2.5A5.94 5.94 0 0 0 6 16.89a1 1 0 0 0 2 .22 4 4 0 0 1 7.94 0A1 1 0 0 0 17 18h.11a1 1 0 0 0 .88-1.1 5.94 5.94 0 0 0-3.18-4.62M12 11.56a1.78 1.78 0 1 1 1.78-1.78A1.78 1.78 0 0 1 12 11.56M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgUserSquare);
export default ForwardRef;
