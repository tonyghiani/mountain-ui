import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHardHat = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 13.17V13a8 8 0 0 0-2.42-5.74 7.84 7.84 0 0 0-3.18-1.88h-.05A8.2 8.2 0 0 0 11.76 5 8.21 8.21 0 0 0 4 13.17 3 3 0 0 0 5 19h14a3 3 0 0 0 1-5.83M19 17H5a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2H6a6.41 6.41 0 0 1 3-5.15V11a1 1 0 0 0 2 0V7.09a7 7 0 0 1 .82-.09H12a5.6 5.6 0 0 1 1 .1V11a1 1 0 0 0 2 0V7.82a6.7 6.7 0 0 1 1.18.87A6 6 0 0 1 18 13h-1a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHardHat);
export default ForwardRef;
