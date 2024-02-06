import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAdjust = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-1 17.93a8 8 0 0 1 0-15.86Zm2 0V4.07a8 8 0 0 1 0 15.86' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAdjust);
export default ForwardRef;
