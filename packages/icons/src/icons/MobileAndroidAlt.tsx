import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMobileAndroidAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h10Zm0-3H7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMobileAndroidAlt);
export default ForwardRef;
