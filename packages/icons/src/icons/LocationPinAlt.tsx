import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLocationPinAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 10.8a2 2 0 1 0-2-2 2 2 0 0 0 2 2m-.71 6.91a1 1 0 0 0 1.42 0l4.09-4.1a6.79 6.79 0 1 0-9.6 0ZM7.23 8.34a4.81 4.81 0 0 1 2.13-3.55 4.81 4.81 0 0 1 5.28 0 4.82 4.82 0 0 1 .75 7.41L12 15.59 8.61 12.2a4.77 4.77 0 0 1-1.38-3.86M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLocationPinAlt);
export default ForwardRef;
