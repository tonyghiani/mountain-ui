import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgExpandArrowsAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.29 13.29 4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41l5.3-5.29a1 1 0 0 0-1.42-1.42M5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM21 16a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29H17a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-4a1 1 0 0 0-1-1m.92-13.38a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgExpandArrowsAlt);
export default ForwardRef;
