import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWindow = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1M6 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6-4H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h18Zm0-11H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWindow);
export default ForwardRef;
