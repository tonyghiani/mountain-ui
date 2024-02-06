import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCancel = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.77 11.36-5-6A1 1 0 0 0 16 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h11a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.28M15.53 17H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10.53l4.17 5Zm-2.82-7.71a1 1 0 0 0-1.42 0L10 10.59l-1.29-1.3a1 1 0 1 0-1.42 1.42L8.59 12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L11.41 12l1.3-1.29a1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCancel);
export default ForwardRef;
