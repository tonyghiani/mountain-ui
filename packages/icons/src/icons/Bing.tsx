import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBing = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m10.1 8.6 1.7 4.3 2.8 1.3L9 17.5V3.4L5 2v17.8L9 22l10-5.8v-4.5z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBing);
export default ForwardRef;
