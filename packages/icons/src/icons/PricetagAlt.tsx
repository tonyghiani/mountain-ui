import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPricetagAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m14.71 5.78-9.48-9.46A1 1 0 0 0 11.5 2h-6a1 1 0 0 0-.71.29l-2.5 2.49a1 1 0 0 0-.29.71v6a1.05 1.05 0 0 0 .29.71l9.49 9.5a1.05 1.05 0 0 0 .71.29 1 1 0 0 0 .71-.29l8.51-8.51a1 1 0 0 0 .29-.71 1.05 1.05 0 0 0-.29-.7m-9.22 7.81L4 11.09V5.9L5.9 4h5.18l8.5 8.49Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPricetagAlt);
export default ForwardRef;
