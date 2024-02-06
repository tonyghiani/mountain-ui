import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVolumeOff = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.93 4.1a1 1 0 0 0-1 .12L11.15 8H7.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78a1 1 0 0 0 .62.22.9.9 0 0 0 .43-.1 1 1 0 0 0 .57-.9V5a1 1 0 0 0-.57-.9M15.5 16.92l-3.38-2.7a1 1 0 0 0-.62-.22h-3v-4h3a1 1 0 0 0 .62-.22l3.38-2.7Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVolumeOff);
export default ForwardRef;
