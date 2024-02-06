import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWindMoon = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 19H7a1 1 0 0 0 0 2h5a1.013 1.013 0 0 1 1 1 1 1 0 0 0 2 0 3.003 3.003 0 0 0-3-3m2-10a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0h2a3.003 3.003 0 0 0 3-3 1 1 0 0 0-2 0 1.013 1.013 0 0 1-1 1h-2a1 1 0 0 0 0 2m2 6h-2.161a8 8 0 0 0 1.146-2.95 1 1 0 0 0-1.305-1.117 6 6 0 0 1-1.92.317A6.06 6.06 0 0 1 9.7 5.2a7 7 0 0 1 .098-1.049A1 1 0 0 0 8.49 3.053 8.032 8.032 0 0 0 4.266 15H3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H6.83a6.028 6.028 0 0 1 .882-9.36 8.065 8.065 0 0 0 8.048 7.61 8 8 0 0 0 .789-.04A6 6 0 0 1 15.277 15H12a1 1 0 0 0 0 2h8a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6M2.62 19.08a1.2 1.2 0 0 0-.33.21A1.03 1.03 0 0 0 2 20a.99.99 0 0 0 1.38.92 1.2 1.2 0 0 0 .33-.21A1 1 0 0 0 4 20a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWindMoon);
export default ForwardRef;
