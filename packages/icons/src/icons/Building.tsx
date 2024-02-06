import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBuilding = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2M9 8h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 4h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m12 8h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-8 0h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6V4h12Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBuilding);
export default ForwardRef;
