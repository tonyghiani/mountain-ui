import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBan = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20m6.31-3.1L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBan);
export default ForwardRef;
