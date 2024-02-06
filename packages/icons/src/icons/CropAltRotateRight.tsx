import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCropAltRotateRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 4h-.59l.3-.29a1 1 0 1 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H16a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V9a5 5 0 0 0-5-5m0 14h-1v-7a1 1 0 0 0-1-1H7V9a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h1v7a1 1 0 0 0 1 1h7v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0H7v-6h6Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCropAltRotateRight);
export default ForwardRef;
