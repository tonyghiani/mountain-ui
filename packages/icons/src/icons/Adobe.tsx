import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAdobe = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M9.07 17.28h2.78l1.75 3.44h2.54L12 9.87ZM2 3v18L9.42 3Zm12.48 0L22 20.81V3Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAdobe);
export default ForwardRef;
