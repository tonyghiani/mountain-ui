import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLetterHindiA = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.022 3h-5a1 1 0 0 0 0 2h1.5v6h-4.95a4.95 4.95 0 0 0 1.026-3 5 5 0 0 0-9.33-2.5 1 1 0 1 0 1.731 1A3 3 0 1 1 7.598 11a1 1 0 0 0 0 2 3 3 0 1 1-2.599 4.5 1 1 0 0 0-1.731 1 5 5 0 0 0 9.33-2.5 4.95 4.95 0 0 0-1.026-3h4.95v7a1 1 0 0 0 2 0V5h1.5a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLetterHindiA);
export default ForwardRef;
