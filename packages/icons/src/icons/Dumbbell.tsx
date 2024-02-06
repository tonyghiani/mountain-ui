import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDumbbell = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m17.48 6.55-2.84-2.84a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l2.12 2.12-8.1 8.1-2.12-2.12a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l2.81 2.81 2.81 2.81a1 1 0 0 0 .71.3 1 1 0 0 0 .71-1.71l-2.09-2.09 8.1-8.1 2.12 2.12a1 1 0 1 0 1.41-1.42ZM3.71 17.46a1 1 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42Zm18-12.34-2.83-2.83a1 1 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDumbbell);
export default ForwardRef;
