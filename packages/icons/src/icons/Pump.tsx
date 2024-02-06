import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPump = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.54 6.29 19 4.75l-1.41-1.41a1 1 0 0 0-1.42 1.42l1 1-.83 2.49a3 3 0 0 0 .73 3.07l2.95 3V19a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H14V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3h1a1 1 0 0 1 1 1v2a3 3 0 0 0 6 0V9.83a5 5 0 0 0-1.46-3.54M12 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h8Zm0-9H4V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm8 1.42-1.54-1.54a1 1 0 0 1-.24-1l.51-1.54.39.4A3 3 0 0 1 20 9.83Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPump);
export default ForwardRef;
