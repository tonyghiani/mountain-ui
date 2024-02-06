import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgXAdd = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42M7 18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2M18 7v6a1 1 0 0 0 2 0V7a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3m3 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgXAdd);
export default ForwardRef;
