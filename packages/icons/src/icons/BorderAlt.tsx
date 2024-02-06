import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBorderAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.5 18.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1m9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0v-15h15a1 1 0 0 0 1-1m-5 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBorderAlt);
export default ForwardRef;
