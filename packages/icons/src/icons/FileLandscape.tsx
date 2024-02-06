import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileLandscape = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 10.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6.06m-6-3.53L18.59 10H17a1 1 0 0 1-1-1ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9v3a3 3 0 0 0 3 3h3Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileLandscape);
export default ForwardRef;
