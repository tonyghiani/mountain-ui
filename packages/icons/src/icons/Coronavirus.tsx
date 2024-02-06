import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCoronavirus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.5 9a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 9.5 9M9 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-.5 4a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5m7.5-1h-1.059a8.95 8.95 0 0 0-1.916-4.61l.753-.754a1 1 0 0 0-1.414-1.414l-.753.753A8.95 8.95 0 0 0 13 3.059V2a1 1 0 0 0-2 0v1.059a8.95 8.95 0 0 0-4.61 1.916l-.754-.753a1 1 0 0 0-1.414 1.414l.753.753A8.95 8.95 0 0 0 3.059 11H2a1 1 0 0 0 0 2h1.059a8.95 8.95 0 0 0 1.916 4.61l-.753.754a1 1 0 1 0 1.414 1.414l.753-.753A8.95 8.95 0 0 0 11 20.941V22a1 1 0 0 0 2 0v-1.059a8.95 8.95 0 0 0 4.61-1.916l.754.753a1 1 0 0 0 1.414-1.414l-.753-.753A8.95 8.95 0 0 0 20.941 13H22a1 1 0 0 0 0-2m-4 2h.92A7 7 0 0 1 13 18.92V17a1 1 0 0 0-2 0v1.92A7 7 0 0 1 5.08 13H6a1 1 0 0 0 0-2h-.92A7 7 0 0 1 11 5.08V7a1 1 0 0 0 2 0V5.08A7 7 0 0 1 18.92 11H18a1 1 0 0 0 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCoronavirus);
export default ForwardRef;
