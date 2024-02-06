import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgExclamation = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m0 4a1.25 1.25 0 1 0-1.25-1.25A1.25 1.25 0 0 0 12 18' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgExclamation);
export default ForwardRef;
