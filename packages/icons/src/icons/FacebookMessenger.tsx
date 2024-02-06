import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFacebookMessenger = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a9.65 9.65 0 0 0-10 9.7 9.5 9.5 0 0 0 3.14 7.18.8.8 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0 11 11 0 0 0 2.9.38A9.7 9.7 0 1 0 12 2m6 7.46-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFacebookMessenger);
export default ForwardRef;
