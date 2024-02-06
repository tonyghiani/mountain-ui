import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVuejsAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22.867 3.374a1 1 0 0 0-.866-.502l-4.97-.004h-3.652a1 1 0 0 0-.817.425l-.559.796-.564-.798a1 1 0 0 0-.816-.423H6.968l-4.973.026A1 1 0 0 0 1.137 4.4l10.02 17.106a1 1 0 0 0 .863.494 1 1 0 0 0 .864-.496l9.98-17.128a1 1 0 0 0 .003-1.002M10.105 4.868l1.085 1.533a1 1 0 0 0 .816.423h.001a1 1 0 0 0 .817-.425L13.9 4.87l1.363-.002-3.244 5.454-3.275-5.454Zm1.912 14.15L3.74 4.885l2.67-.015 4.754 7.918a1 1 0 0 0 .857.485h.006a1 1 0 0 0 .857-.489l4.708-7.916 2.67.003Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVuejsAlt);
export default ForwardRef;
