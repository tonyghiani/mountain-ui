import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPower = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m10.21 6.21.79-.8V10a1 1 0 0 0 2 0V5.41l.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42M18 7.56A1 1 0 1 0 16.56 9a6.45 6.45 0 1 1-9.12 0A1 1 0 1 0 6 7.56a8.46 8.46 0 1 0 12 0' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPower);
export default ForwardRef;
