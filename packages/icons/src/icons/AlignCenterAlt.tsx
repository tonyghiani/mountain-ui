import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAlignCenterAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5 8h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m16 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-2 5H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAlignCenterAlt);
export default ForwardRef;
