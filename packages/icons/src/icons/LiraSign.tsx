import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLiraSign = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 12a1 1 0 0 0-1 1 7.01 7.01 0 0 1-7 7v-8.865l5.217-1.159a1 1 0 0 0-.434-1.952L10 9.087V7.135l5.217-1.159a1 1 0 1 0-.434-1.952L10 5.087V3a1 1 0 0 0-2 0v2.531l-2.217.493a1 1 0 1 0 .434 1.952L8 7.58V9.53l-2.217.493a1 1 0 1 0 .434 1.952L8 11.58V21a1 1 0 0 0 1 1h1a9.01 9.01 0 0 0 9-9 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLiraSign);
export default ForwardRef;
