import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVoicemail = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 8a4 4 0 0 0-4 4 3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8M6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2m12 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVoicemail);
export default ForwardRef;
