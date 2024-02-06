import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCrosshairAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 17.93V17a1 1 0 0 0-2 0v2.93A8 8 0 0 1 4.07 13H7a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V7a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H17a1 1 0 0 0 0 2h2.93A8 8 0 0 1 13 19.93' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCrosshairAlt);
export default ForwardRef;
