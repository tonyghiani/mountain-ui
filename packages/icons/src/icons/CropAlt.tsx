import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCropAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 16h-1V7a1 1 0 0 0-1-1H8V5a1 1 0 0 0-2 0v1H5a1 1 0 0 0 0 2h1v9a1 1 0 0 0 1 1h9v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0H8V8h8Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCropAlt);
export default ForwardRef;
