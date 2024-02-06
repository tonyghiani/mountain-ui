import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTumblrSquare = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M2 2v20h20V2Zm11.57 15.85a3.4 3.4 0 0 1-3.75-3.33v-4.08H8.56V8.83A3.83 3.83 0 0 0 11 5.47a.09.09 0 0 1 .09-.09h1.82v3.17h2.5v1.89h-2.49v3.89a1.11 1.11 0 0 0 1.2 1.23 3 3 0 0 0 1-.22l.6 1.78a3.34 3.34 0 0 1-2.15.73' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTumblrSquare);
export default ForwardRef;
