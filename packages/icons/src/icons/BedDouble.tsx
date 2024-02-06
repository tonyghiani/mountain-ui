import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBedDouble = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 3.5H4a3 3 0 0 0-3 3v13a1 1 0 0 0 1 1h4a1 1 0 0 0 .83-.45l1.71-2.55h6.92l1.71 2.55a1 1 0 0 0 .83.45h4a1 1 0 0 0 1-1v-13a3 3 0 0 0-3-3m1 15h-2.46L16.83 16a1 1 0 0 0-.83-.5H8a1 1 0 0 0-.83.45L5.46 18.5H3v-5h18Zm-14-7v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1Zm6 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1Zm8 0h-2v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-2 .78 3 3 0 0 0-2-.78H8a3 3 0 0 0-3 3v1H3v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBedDouble);
export default ForwardRef;
