import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMusicNote = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.12 2.21a1 1 0 0 0-.86-.21l-8 2a1 1 0 0 0-.76 1v10.35A3.45 3.45 0 0 0 8 15a3.5 3.5 0 1 0 3.5 3.5v-7.72L18.74 9h.07l.19-.15.15-.1a1 1 0 0 0 .13-.15.8.8 0 0 0 .1-.15.6.6 0 0 0 .06-.18.6.6 0 0 0 0-.19.2.2 0 0 0 0-.08V3a1 1 0 0 0-.32-.79M8 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 8 20m9.5-12.78-6 1.5V5.78l6-1.5Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMusicNote);
export default ForwardRef;
