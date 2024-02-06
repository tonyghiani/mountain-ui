import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPrescriptionBottle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 14h-6v-4h6Zm0-6h-7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10ZM5 6V4h14v2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPrescriptionBottle);
export default ForwardRef;
