import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAngleLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m11.29 12 3.54-3.54a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAngleLeft);
export default ForwardRef;
