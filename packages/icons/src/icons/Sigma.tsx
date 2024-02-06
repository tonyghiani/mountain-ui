import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSigma = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 16h-5.59l3.3-3.29a1 1 0 0 0 0-1.42L10.41 8H16a1 1 0 0 0 0-2H8a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l4.3 4.29-4.3 4.29a1 1 0 0 0-.21 1.09A1 1 0 0 0 8 18h8a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSigma);
export default ForwardRef;
