import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowsRightDown = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.92 6.62a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42L17.59 6H9a3 3 0 0 0-3 3v8.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L8 17.59V9a1 1 0 0 1 1-1h8.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowsRightDown);
export default ForwardRef;