import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGlassMartiniAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.78 3.62a1 1 0 0 0 .12-1.05A1 1 0 0 0 21 2H3a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1.05L11 14.6V20H5.25a1 1 0 0 0 0 2h13.5a1 1 0 0 0 0-2H13v-5.4ZM5.08 4h13.84l-2.4 3h-9ZM12 12.65 9.08 9h5.84Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGlassMartiniAlt);
export default ForwardRef;
