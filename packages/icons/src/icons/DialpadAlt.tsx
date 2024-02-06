import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDialpadAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5 9.25A2.75 2.75 0 1 0 7.75 12 2.75 2.75 0 0 0 5 9.25m0 4A1.25 1.25 0 1 1 6.25 12 1.25 1.25 0 0 1 5 13.25m7-4A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25m0 4A1.25 1.25 0 1 1 13.25 12 1.25 1.25 0 0 1 12 13.25m7-5.5A2.75 2.75 0 1 0 16.25 5 2.75 2.75 0 0 0 19 7.75m0-4A1.25 1.25 0 1 1 17.75 5 1.25 1.25 0 0 1 19 3.75m0 5.5A2.75 2.75 0 1 0 21.75 12 2.75 2.75 0 0 0 19 9.25m0 4A1.25 1.25 0 1 1 20.25 12 1.25 1.25 0 0 1 19 13.25m-14-11A2.75 2.75 0 1 0 7.75 5 2.75 2.75 0 0 0 5 2.25m0 4A1.25 1.25 0 1 1 6.25 5 1.25 1.25 0 0 1 5 6.25m7 10A2.75 2.75 0 1 0 14.75 19 2.75 2.75 0 0 0 12 16.25m0 4A1.25 1.25 0 1 1 13.25 19 1.25 1.25 0 0 1 12 20.25m0-18A2.75 2.75 0 1 0 14.75 5 2.75 2.75 0 0 0 12 2.25m0 4A1.25 1.25 0 1 1 13.25 5 1.25 1.25 0 0 1 12 6.25' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDialpadAlt);
export default ForwardRef;
