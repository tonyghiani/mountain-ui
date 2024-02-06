import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTablet = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-5.29-2.71a1 1 0 0 0-.91-.29l-.18.06a.8.8 0 0 0-.18.09l-.15.12a1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.5 1.5 0 0 0 .33.22 1 1 0 0 0 1.09-.22A1 1 0 0 0 13 17a.84.84 0 0 0-.08-.38 1.2 1.2 0 0 0-.21-.33' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;
