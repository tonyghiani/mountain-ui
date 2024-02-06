import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGlassMartini = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 20h-5v-5.06A9 9 0 0 0 21 6a8.7 8.7 0 0 0-.67-3.39 1 1 0 0 0-.22-.32L20 2.21a1 1 0 0 0-.21-.13 1 1 0 0 0-.28-.08H4.5a1 1 0 0 0-.29.06A2 2 0 0 0 4 2.2l-.12.09a1 1 0 0 0-.22.32A8.7 8.7 0 0 0 3 6a9 9 0 0 0 8 8.94V20H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2M5 6a7 7 0 0 1 .29-2h13.42A7 7 0 0 1 19 6 7 7 0 0 1 5 6' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGlassMartini);
export default ForwardRef;
