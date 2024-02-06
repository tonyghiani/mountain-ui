import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgChat = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 2H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h2.59l2.7 2.71A1 1 0 0 0 12 22a1 1 0 0 0 .65-.24L15.87 19H18a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 14a1 1 0 0 1-1 1h-2.5a1 1 0 0 0-.65.24l-2.8 2.4-2.34-2.35A1 1 0 0 0 9 17H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgChat);
export default ForwardRef;
