import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgKeySkeleton = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21 4.41.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41-2.83 2.83-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6 2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12 1.42-1.41.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgKeySkeleton);
export default ForwardRef;
