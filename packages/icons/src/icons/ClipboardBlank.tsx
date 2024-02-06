import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgClipboardBlank = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 4h-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-7 0h4v2h-4zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h1a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgClipboardBlank);
export default ForwardRef;
