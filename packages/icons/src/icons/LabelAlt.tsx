import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLabelAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15 12a1 1 0 1 0 1-1 1 1 0 0 0-1 1m6.71-.71-5-5A1 1 0 0 0 16 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a1 1 0 0 0 .71-.29l5-5a1 1 0 0 0 0-1.42M15.59 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10.59l4 4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLabelAlt);
export default ForwardRef;
