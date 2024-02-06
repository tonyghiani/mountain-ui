import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEnvelopeEdit = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14 11.51h2.42a1 1 0 0 0 .71-.29l4.58-4.58a1 1 0 0 0 0-1.42L19.29 2.8a1 1 0 0 0-1.42 0l-4.58 4.58a1.05 1.05 0 0 0-.29.71v2.42a1 1 0 0 0 1 1m1-3 3.58-3.58 1 1L16 9.51h-1Zm6 2a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.9l5.88 5.89a3 3 0 0 0 4.27 0 1 1 0 0 0 0-1.4 1 1 0 0 0-1.43 0 1 1 0 0 1-1.4 0l-5.91-5.9H10a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a1 1 0 0 0-1-1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEnvelopeEdit);
export default ForwardRef;
