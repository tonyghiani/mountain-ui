import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVolumeMute = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79-1.8 1.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.79-1.8 1.79 1.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVolumeMute);
export default ForwardRef;
