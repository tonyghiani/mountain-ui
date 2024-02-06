import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBitcoinCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9m2-14V6a1 1 0 0 0-2 0v1h-1V6a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3 3 3 0 0 0-.77-2 3 3 0 0 0 .77-2 3 3 0 0 0-3-3m0 8h-3v-2h3a1 1 0 0 1 0 2m0-4h-3V9h3a1 1 0 0 1 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBitcoinCircle);
export default ForwardRef;
