import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCompressAltLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10.5 5.5a1 1 0 0 0-1 1v1.59l-5.79-5.8a1 1 0 0 0-1.42 1.42l5.8 5.79H6.5a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54 1 1 0 0 0 .08-.38v-4a1 1 0 0 0-1-1m11.21 14.79-5.8-5.79h1.59a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54 1 1 0 0 0-.08.38v4a1 1 0 0 0 2 0v-1.59l5.79 5.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCompressAltLeft);
export default ForwardRef;
