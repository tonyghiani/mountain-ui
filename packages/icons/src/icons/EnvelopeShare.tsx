import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEnvelopeShare = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.41l5.88 5.89a3 3 0 0 0 2.11.87 3.08 3.08 0 0 0 2.16-.9l1.72-1.72a1 1 0 1 0-1.42-1.42l-1.75 1.75a1 1 0 0 1-1.4 0L4.41 8H10a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m0-6a2 2 0 0 0-1.18.39l-1.75-.8L19 6.71A2 2 0 0 0 20 7a2 2 0 1 0-2-2l-1.9.87A2 2 0 0 0 15 5.5a2 2 0 0 0 0 4 1.9 1.9 0 0 0 .92-.24l2.1 1A2 2 0 1 0 20 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEnvelopeShare);
export default ForwardRef;
