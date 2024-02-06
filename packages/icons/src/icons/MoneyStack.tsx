import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMoneyStack = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 17H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2m0 4H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2M6 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1m14-6H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-9-7a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m6-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMoneyStack);
export default ForwardRef;
