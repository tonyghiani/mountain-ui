import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPanoramaH = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.54 5.16a1 1 0 0 0-1-.07A21.3 21.3 0 0 1 12 6.73a21.3 21.3 0 0 1-8.58-1.64 1 1 0 0 0-1 .07A1 1 0 0 0 2 6v12a1 1 0 0 0 .46.84 1 1 0 0 0 1 .07A21.3 21.3 0 0 1 12 17.27a21.3 21.3 0 0 1 8.58 1.64A1.1 1.1 0 0 0 21 19a1 1 0 0 0 .54-.16A1 1 0 0 0 22 18V6a1 1 0 0 0-.46-.84M20 16.52a24.8 24.8 0 0 0-8-1.25 24.8 24.8 0 0 0-8 1.25v-9a24.8 24.8 0 0 0 8 1.25 24.8 24.8 0 0 0 8-1.25Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPanoramaH);
export default ForwardRef;
