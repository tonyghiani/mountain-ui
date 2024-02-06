import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTrafficLight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 5.5A1.5 1.5 0 1 0 13.5 7 1.5 1.5 0 0 0 12 5.5m10 3h-.54a6 6 0 0 0 1.54-4 1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.82-2H9a3 3 0 0 0-2.82 2H2a1 1 0 0 0-1 1 6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1 6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1 6 6 0 0 0 5.16 5.93A3 3 0 0 0 9 22.5h6a3 3 0 0 0 2.84-2.07A6 6 0 0 0 23 14.5a1 1 0 0 0-1-1h-.54a6 6 0 0 0 1.54-4 1 1 0 0 0-1-1M6 18.37a4 4 0 0 1-2.87-2.87H6Zm0-5a4 4 0 0 1-2.87-2.87H6Zm0-5a4.1 4.1 0 0 1-1.83-1 4.1 4.1 0 0 1-1-1.83H6ZM16 19.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm3.83-2.17a4.1 4.1 0 0 1-1.83 1V15.5h2.87a4.1 4.1 0 0 1-1.04 1.83m0-5a4.1 4.1 0 0 1-1.83 1V10.5h2.87a4.1 4.1 0 0 1-1.04 1.83m0-5a4.1 4.1 0 0 1-1.83 1V5.5h2.87a4.1 4.1 0 0 1-1.04 1.83M12 15.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5m0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTrafficLight);
export default ForwardRef;
