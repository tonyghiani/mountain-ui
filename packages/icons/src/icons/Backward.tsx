import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBackward = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.67 5.85a2.63 2.63 0 0 0-2.67 0l-4 2.3a2.67 2.67 0 0 0-4-2.31L3.33 9.69a2.67 2.67 0 0 0 0 4.62L10 18.16a2.66 2.66 0 0 0 2.67 0A2.65 2.65 0 0 0 14 15.85l4 2.31a2.7 2.7 0 0 0 1.33.36 2.6 2.6 0 0 0 1.34-.37 2.63 2.63 0 0 0 1.33-2.3v-7.7a2.63 2.63 0 0 0-1.33-2.3m-8.67 10a.66.66 0 0 1-.33.58.69.69 0 0 1-.67 0l-6.67-3.85a.67.67 0 0 1 0-1.16L11 7.57a.67.67 0 0 1 .67 0 .66.66 0 0 1 .33.58Zm8 0a.67.67 0 0 1-1 .57l-5-2.88v-3.08l5-2.88a.67.67 0 0 1 1 .57Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBackward);
export default ForwardRef;
