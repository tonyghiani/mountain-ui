import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgIntercomAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.991 15a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1m-8-2a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m14-12h-16a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3m1 19a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-3.643-4.591A8.82 8.82 0 0 1 11.99 17a9 9 0 0 1-5.356-1.591 1 1 0 1 0-1.287 1.53A10.8 10.8 0 0 0 11.99 19a10.8 10.8 0 0 0 6.644-2.06 1 1 0 0 0-1.287-1.531M17.99 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgIntercomAlt);
export default ForwardRef;
