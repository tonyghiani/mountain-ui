import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLayers = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m2.5 10.56 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73M12 5.65l7 4-7 4.05-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36 1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37 1 1 0 0 0-1.37-.36' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
