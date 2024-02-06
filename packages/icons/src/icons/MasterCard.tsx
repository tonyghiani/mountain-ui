import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMasterCard = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.265 5.274a6.7 6.7 0 0 0-3.273.855 6.728 6.728 0 1 0 0 11.745 6.726 6.726 0 1 0 3.273-12.6m-5.028 11.183a4.7 4.7 0 0 1-1.518.273 4.728 4.728 0 0 1 0-9.456 4.7 4.7 0 0 1 1.518.273 6.687 6.687 0 0 0 0 8.91m1.755-1.057a4.695 4.695 0 0 1 0-6.796 4.695 4.695 0 0 1 0 6.796m3.273 1.33a4.7 4.7 0 0 1-1.519-.273 6.687 6.687 0 0 0 0-8.91 4.7 4.7 0 0 1 1.519-.273 4.728 4.728 0 0 1 0 9.456' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMasterCard);
export default ForwardRef;
