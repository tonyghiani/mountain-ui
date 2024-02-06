import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDatabase = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 16.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1M12 2C8 2 4 3.37 4 6v12c0 2.63 4 4 8 4s8-1.37 8-4V6c0-2.63-4-4-8-4m6 16c0 .71-2.28 2-6 2s-6-1.29-6-2v-3.27A13.16 13.16 0 0 0 12 16a13.16 13.16 0 0 0 6-1.27Zm0-6c0 .71-2.28 2-6 2s-6-1.29-6-2V8.73A13.16 13.16 0 0 0 12 10a13.16 13.16 0 0 0 6-1.27Zm-6-4C8.28 8 6 6.71 6 6s2.28-2 6-2 6 1.29 6 2-2.28 2-6 2m-4 2.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDatabase);
export default ForwardRef;
