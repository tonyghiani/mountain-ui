import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTwitterX = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1668.56 1221.19'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='m283.94 167.31 386.39 516.64L281.5 1104h87.51l340.42-367.76L984.48 1104h297.8L874.15 558.3l361.92-390.99h-87.51l-313.51 338.7-253.31-338.7zm128.69 64.46h136.81l604.13 807.76h-136.81z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTwitterX);
export default ForwardRef;
