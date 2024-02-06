import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSadSquint = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m9.08 12.21 1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1 1 0 0 0-1.42 1.42l.8.79-.8.79a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29m-.72 3.12a1 1 0 0 0-.13 1.4 1 1 0 0 0 1.41.13 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.4 5.81 5.81 0 0 0-7.28 0m8.22-7.54a1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-.79-.79.79-.79a1 1 0 0 0 0-1.42M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSadSquint);
export default ForwardRef;
