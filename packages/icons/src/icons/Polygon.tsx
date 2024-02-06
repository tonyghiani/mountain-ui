import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPolygon = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.87 11.5-4.5-7.79a1 1 0 0 0-.87-.5h-9a1 1 0 0 0-.87.5l-4.5 7.79a1 1 0 0 0 0 1l4.5 7.79a1 1 0 0 0 .87.5h9a1 1 0 0 0 .87-.5l4.5-7.79a1 1 0 0 0 0-1m-6 7.29H8.08L4.15 12l3.93-6.79h7.84L19.85 12Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPolygon);
export default ForwardRef;
