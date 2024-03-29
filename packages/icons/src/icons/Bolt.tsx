import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBolt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .17.87 1 1 0 0 0 .8.39h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07m-9.79 8.68 1.07-4a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBolt);
export default ForwardRef;
