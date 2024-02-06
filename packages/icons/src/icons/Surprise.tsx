import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSurprise = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8M10 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1m5-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3 3a3.39 3.39 0 0 0-3.25 3.5A3.39 3.39 0 0 0 12 18a3.39 3.39 0 0 0 3.25-3.5A3.39 3.39 0 0 0 12 11m0 5a1.39 1.39 0 0 1-1.25-1.5A1.39 1.39 0 0 1 12 13a1.39 1.39 0 0 1 1.25 1.5A1.39 1.39 0 0 1 12 16' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSurprise);
export default ForwardRef;
