import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudSun = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 9h-.8a4.3 4.3 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.3 4.3 0 0 0 17 5.8V5a1 1 0 0 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.9 5.9 0 0 0 10.5 8a6 6 0 0 0-5.94 5.13A3.5 3.5 0 0 0 5.5 20h9.17A4.33 4.33 0 0 0 19 15.67a4.2 4.2 0 0 0-.3-1.55l.13.12a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.56-.56A4.3 4.3 0 0 0 20.2 11h.8a1 1 0 0 0 0-2m-6.33 9H5.5a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.33 2.33 0 0 1-.39 4.62m3-6.35a2.2 2.2 0 0 1-.6.4 4.5 4.5 0 0 0-1.07-.51 6.1 6.1 0 0 0-2.09-2.49 2.3 2.3 0 0 1 .46-.69 2.42 2.42 0 0 1 3.29 0 2.37 2.37 0 0 1 0 3.3Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudSun);
export default ForwardRef;
