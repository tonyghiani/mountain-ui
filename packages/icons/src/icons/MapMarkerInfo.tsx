import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMapMarkerInfo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m8.46-.32A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.37-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24m-3.68-7.48a.6.6 0 0 0-.09-.17l-.12-.15A1 1 0 0 0 11.8 7h-.18l-.18.09-.15.13-.12.15a.6.6 0 0 0-.09.17.6.6 0 0 0-.06.19A1.2 1.2 0 0 0 11 8a.9.9 0 0 0 .08.39 1.1 1.1 0 0 0 .21.32 1.1 1.1 0 0 0 .33.22 1.07 1.07 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.22 1.1 1.1 0 0 0 .21-.32A1 1 0 0 0 13 8a1 1 0 0 0 0-.19.6.6 0 0 0-.08-.24' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMapMarkerInfo);
export default ForwardRef;
