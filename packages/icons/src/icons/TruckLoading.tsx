import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTruckLoading = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 16h-2.18a3 3 0 0 0 .18-1v-5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 .18 1H7a1 1 0 0 1-1-1V5a3 3 0 0 0-3-3H2a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v10a3 3 0 0 0 2.22 2.88 3 3 0 1 0 5.6.12h3.36a3 3 0 1 0 5.64 0H22a1 1 0 0 0 0-2M9 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1m2-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTruckLoading);
export default ForwardRef;
