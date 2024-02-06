import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMobileAndroid = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m12.71 16.29-.15-.12a.8.8 0 0 0-.18-.09L12.2 16a1 1 0 0 0-.91.27 1.2 1.2 0 0 0-.21.33 1 1 0 0 0 1.3 1.31 1.5 1.5 0 0 0 .33-.22 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.31M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMobileAndroid);
export default ForwardRef;
