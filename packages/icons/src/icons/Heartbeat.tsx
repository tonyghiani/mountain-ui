import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHeartbeat = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 10.41h-2.5a1 1 0 0 0-.71.3L16.55 12l-2.8-3.19a1 1 0 0 0-1.46 0l-1.7 1.7H9a1 1 0 0 0 0 2h2a1 1 0 0 0 .71-.29L13 10.88l2.8 3.19a1 1 0 0 0 .72.34 1 1 0 0 0 .71-.29l1.7-1.71H21a1 1 0 0 0 0-2m-7.39 5.3-1.9 1.9a1 1 0 0 1-1.42 0L5.08 12.4a3.69 3.69 0 0 1 0-5.22 3.69 3.69 0 0 1 5.21 0 1 1 0 0 0 1.42 0 3.78 3.78 0 0 1 5.21 0 4 4 0 0 1 .58.75 1 1 0 0 0 1.72-1 6 6 0 0 0-.88-1.13A5.68 5.68 0 0 0 11 5.17a5.68 5.68 0 0 0-9 4.62 5.62 5.62 0 0 0 1.67 4L8.88 19a3 3 0 0 0 4.24 0L15 17.12a1 1 0 0 0 0-1.41 1 1 0 0 0-1.39 0' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHeartbeat);
export default ForwardRef;
