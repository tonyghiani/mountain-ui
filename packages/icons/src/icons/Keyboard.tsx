import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgKeyboard = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M6.21 13.29a.9.9 0 0 0-.33-.21 1 1 0 0 0-.76 0 .9.9 0 0 0-.54.54 1 1 0 1 0 1.84 0 1 1 0 0 0-.21-.33M13.5 11h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m-4 0h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m-3-2h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2M20 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-6-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m3.5-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m.71 4.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 .9.9 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 1 0 1.92.38.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgKeyboard);
export default ForwardRef;
