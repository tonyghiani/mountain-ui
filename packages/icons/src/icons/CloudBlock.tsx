import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudBlock = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18.42 7.72A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66 1.1 1.1 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78m-9.25 6a4 4 0 1 0 5.66 0 4.1 4.1 0 0 0-5.66-.05ZM10 16.5a2 2 0 0 1 2-2 2 2 0 0 1 .51.07L10.07 17a2 2 0 0 1-.07-.5m3.41 1.41a2 2 0 0 1-1.91.5L13.93 16a2 2 0 0 1 .07.51 2 2 0 0 1-.59 1.4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudBlock);
export default ForwardRef;
