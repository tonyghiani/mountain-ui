import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const Svg13Plus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2m-7 4a1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.5a1 1 0 0 0 0 2h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3M7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(Svg13Plus);
export default ForwardRef;
