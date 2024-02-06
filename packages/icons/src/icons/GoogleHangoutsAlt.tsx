import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGoogleHangoutsAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.992 7.69a2 2 0 0 0 0 4l.015-.001v.501a.5.5 0 0 1-.5.5 1 1 0 0 0 0 2 2.5 2.5 0 0 0 2.5-2.5v-2.5a1 1 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85m3-6.688a9.787 9.787 0 0 0-1 19.523v1.477a1 1 0 0 0 1.238.97 12.535 12.535 0 0 0 9.467-10.974 9.734 9.734 0 0 0-9.706-10.996m7.717 10.78a10.55 10.55 0 0 1-6.718 8.86v-1.066a1 1 0 0 0-1-1 7.787 7.787 0 1 1 7.788-7.787 8 8 0 0 1-.07.993M14.992 7.69a2 2 0 1 0 0 4l.015-.001v.501a.5.5 0 0 1-.5.5 1 1 0 0 0 0 2 2.5 2.5 0 0 0 2.5-2.5v-2.5a1 1 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGoogleHangoutsAlt);
export default ForwardRef;
