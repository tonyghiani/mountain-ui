import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTumblr = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.79 18a4.7 4.7 0 0 1-1.62.35 1.75 1.75 0 0 1-1.92-2v-6.23h4v-3h-4V2h-2.92a.15.15 0 0 0-.14.15 6.11 6.11 0 0 1-3.94 5.39v2.58h2v6.54c0 2.23 1.65 5.41 6 5.34 1.47 0 3.11-.64 3.47-1.17Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTumblr);
export default ForwardRef;
