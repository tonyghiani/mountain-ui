import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudMeatball = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.5 15.92h-.77l.39-.67a1 1 0 0 0-1.74-1l-.38.67-.38-.67a1 1 0 0 0-1.74 1l.39.67H9.5a1 1 0 0 0 0 2h.77l-.39.66a1 1 0 0 0 1.74 1l.38-.66.38.66a1 1 0 0 0 1.74-1l-.39-.66h.77a1 1 0 0 0 0-2m3.92-7.79A7 7 0 0 0 5.06 10 4 4 0 0 0 2 13.92a4 4 0 0 0 3.34 3.93h.16a1 1 0 0 0 .16-2 2 2 0 0 1-1.66-2 2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66 3 3 0 0 1 .62 5.72 1 1 0 1 0 .74 1.85 5 5 0 0 0-.45-9.41Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudMeatball);
export default ForwardRef;
