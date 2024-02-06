import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGrinTongueWink = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0 1 1 0 0 0 1.41 1.41 1 1 0 0 1 1.42 0 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m6 2H9a1 1 0 0 0 0 2 3 3 0 0 0 6 0 1 1 0 0 0 0-2m-3 3a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGrinTongueWink);
export default ForwardRef;
