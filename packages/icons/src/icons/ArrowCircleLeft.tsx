import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowCircleLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.29 11.29a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0ZM2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12m18 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowCircleLeft);
export default ForwardRef;
