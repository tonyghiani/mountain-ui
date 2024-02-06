import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgThSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m22.71 21.29-1-1-6-6-6-6-6-6-1-1a1 1 0 0 0-1.42 1.42l.71.7V21a1 1 0 0 0 1 1h17.59l.7.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M4 5.41 6.59 8H4ZM8 20H4v-4h4Zm0-6H4v-4h4Zm2-2.59L12.59 14H10ZM14 20h-4v-4h4Zm2 0v-2.59L18.59 20ZM8.67 4H14v5a1 1 0 0 0 1 1h5v5.33a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H8.67a1 1 0 0 0 0 2M16 4h4v4h-4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgThSlash);
export default ForwardRef;
