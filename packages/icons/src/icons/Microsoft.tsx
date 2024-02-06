import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMicrosoft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M2 22h9.5v-9.5H2zm0-10.5h9.5V2H2zM12.5 2v9.5H22V2zm0 20H22v-9.5h-9.5z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMicrosoft);
export default ForwardRef;
