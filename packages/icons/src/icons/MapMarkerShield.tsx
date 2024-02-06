import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMapMarkerShield = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.41 6.53a2.24 2.24 0 0 1-1.82-.39 1 1 0 0 0-1.18 0 2.24 2.24 0 0 1-1.82.39 1 1 0 0 0-.84.2 1 1 0 0 0-.37.78v2.9A4.14 4.14 0 0 0 10 13.74l1.37 1a1 1 0 0 0 1.18 0l1.37-1a4.14 4.14 0 0 0 1.66-3.33v-2.9a1 1 0 0 0-.37-.78 1 1 0 0 0-.8-.2m-.79 3.88a2.15 2.15 0 0 1-.85 1.73l-.77.57-.77-.57a2.15 2.15 0 0 1-.85-1.73V8.57A4.2 4.2 0 0 0 12 8.12a4.2 4.2 0 0 0 1.62.45Zm6.84-.78A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMapMarkerShield);
export default ForwardRef;
