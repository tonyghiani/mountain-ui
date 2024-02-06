import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgChartPie = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 4.93 18.69h.12A10 10 0 0 0 12 2m1 2.07A8 8 0 0 1 19.93 11H13ZM12 20a8 8 0 0 1-1-15.93V12a1.1 1.1 0 0 0 .07.35v.15l4 6.87A7.8 7.8 0 0 1 12 20m4.83-1.64L13.73 13h6.2a8 8 0 0 1-3.1 5.36' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
