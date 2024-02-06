import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAndroidPhoneSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.29 17.71a1 1 0 0 0 1.42 0 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.2 1.2 0 0 0-.21-.33 1 1 0 0 0-1.42 0 1.2 1.2 0 0 0-.21.33.94.94 0 0 0 0 .76 1.2 1.2 0 0 0 .21.33M8.66 4H16a1 1 0 0 1 1 1v7.34a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3H8.66a1 1 0 0 0 0 2m13.05 16.29-18-18a1 1 0 0 0-1.42 1.42L5 6.41V19a3 3 0 0 0 3 3h8a3 3 0 0 0 2.76-1.83l1.53 1.54a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M17 19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8.41l10 10Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAndroidPhoneSlash);
export default ForwardRef;
