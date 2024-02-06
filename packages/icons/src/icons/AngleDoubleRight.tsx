import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAngleDoubleRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.46 8.29A1 1 0 1 0 7 9.71L9.34 12 7 14.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Zm8.5 3-3-3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .04-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAngleDoubleRight);
export default ForwardRef;
