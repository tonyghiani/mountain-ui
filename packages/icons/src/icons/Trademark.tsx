import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTrademark = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.5 7h-6a1 1 0 0 0 0 2h2v7a1 1 0 0 0 2 0V9h2a1 1 0 0 0 0-2m11.92.62a1 1 0 0 0-.54-.54 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21L17 10.09l-2.79-2.8a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.54.54 1 1 0 0 0-.08.38v8a1 1 0 0 0 2 0v-5.59l1.79 1.8a1 1 0 0 0 1.42 0l1.79-1.8V16a1 1 0 0 0 2 0V8a1 1 0 0 0-.08-.38' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTrademark);
export default ForwardRef;
