import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRepeat = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5.5 17.5H4v-11h7.8l-.8.79a1 1 0 0 0 1.41 1.42l2.5-2.5a1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l.79.79H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.5a1 1 0 0 0 0-2M21 4.5h-2.5a1 1 0 0 0 0 2H20v11h-8.37l.79-.79a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 1.41-1.42l-.79-.79H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
