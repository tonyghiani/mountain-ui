import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgShareAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35A4 4 0 1 0 14 6a4 4 0 0 0 .07.71L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4 4 0 0 0 14 18a4 4 0 1 0 4-4m0-10a2 2 0 1 1-2 2 2 2 0 0 1 2-2M6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2m12 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgShareAlt);
export default ForwardRef;
