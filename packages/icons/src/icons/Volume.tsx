import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVolume = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08Zm8.66-10.58a1 1 0 0 0-1.42 1.42 6 6 0 0 1-.38 8.84 1 1 0 0 0 .64 1.76 1 1 0 0 0 .64-.23 8 8 0 0 0 .52-11.79m-2.83 2.83a1 1 0 1 0-1.42 1.42A2 2 0 0 1 16 12a2 2 0 0 1-.71 1.53 1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.12A4 4 0 0 0 18 12a4.06 4.06 0 0 0-1.17-2.83' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVolume);
export default ForwardRef;
