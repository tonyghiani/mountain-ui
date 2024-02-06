import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSquint = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-5.92-1.79 1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1 1 0 0 0-1.42 1.42l.8.79-.8.79a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m4.58-12.21a1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-.79-.79.79-.79a1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSquint);
export default ForwardRef;
