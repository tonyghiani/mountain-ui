import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgConstructor = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 9.67V9.5a7.95 7.95 0 0 0-5.59-7.62h-.06a8.3 8.3 0 0 0-2.59-.36A8.21 8.21 0 0 0 4 9.67a3 3 0 0 0 0 5.66 8 8 0 0 0 8 7.17h.23a8.13 8.13 0 0 0 7.68-7.16A3 3 0 0 0 20 9.67M12.18 20.5a6 6 0 0 1-6.09-5h11.77a6.09 6.09 0 0 1-5.68 5m6.82-7H5a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2H6a6.4 6.4 0 0 1 3-5.15V7.5a1 1 0 0 0 2 0V3.59a7 7 0 0 1 .82-.09H12a7 7 0 0 1 1 .09V7.5a1 1 0 0 0 2 0V4.32a6.7 6.7 0 0 1 1.18.87A6 6 0 0 1 18 9.5h-1a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgConstructor);
export default ForwardRef;
