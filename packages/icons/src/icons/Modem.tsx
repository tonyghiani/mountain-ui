import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgModem = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.48 13.13a.7.7 0 0 0-.05-.2 1 1 0 0 0-.08-.17 1 1 0 0 0-.1-.16l-.16-.13-.09-.09-14.72-8.5a1 1 0 0 0-1 1.74l11.49 6.63H3.5a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-4s-.02-.08-.02-.12m-2 4.12a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-3h15Zm-3 0a1 1 0 1 0-1-1 1 1 0 0 0 1.02 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgModem);
export default ForwardRef;
