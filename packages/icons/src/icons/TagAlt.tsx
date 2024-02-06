import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTagAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7.5 6A1.5 1.5 0 1 0 9 7.5 1.5 1.5 0 0 0 7.5 6m13.62 4.71-8.41-8.42A1 1 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24Zm-1.41 2.82-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1 1 0 0 1 .29.71 1 1 0 0 1-.29.7' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTagAlt);
export default ForwardRef;
