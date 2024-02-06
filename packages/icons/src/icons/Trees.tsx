import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTrees = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.5 5a4.86 4.86 0 0 0-2.5.69A6 6 0 0 0 2.5 8v4a6 6 0 0 0 5 5.91V21a1 1 0 0 0 2 0v-3.09a6.1 6.1 0 0 0 2.78-1.26 5 5 0 0 0 3.22 2.25V21a1 1 0 0 0 2 0v-2.1a5 5 0 0 0 4-4.9v-4a5 5 0 0 0-5-5m-5 5v4a5 5 0 0 0 .06.57 4 4 0 0 1-2.06 1.3V13a1 1 0 0 0-2 0v2.86a4 4 0 0 1-3-3.86V8a4 4 0 0 1 6.83-2.84 3.94 3.94 0 0 1 1.06 2A5 5 0 0 0 11.5 10m8 4a3 3 0 0 1-2 2.82V13a1 1 0 0 0-2 0v3.82a3 3 0 0 1-2-2.82v-4a3 3 0 0 1 6 0Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTrees);
export default ForwardRef;
