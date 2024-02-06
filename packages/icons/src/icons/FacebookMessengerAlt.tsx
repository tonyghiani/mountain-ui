import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFacebookMessengerAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.991 1a10.614 10.614 0 0 0-11 10.7 10.46 10.46 0 0 0 3.414 7.866l.052 1.69A1.8 1.8 0 0 0 6.256 23a1.8 1.8 0 0 0 .726-.152L8.903 22a12 12 0 0 0 3.088.4 10.615 10.615 0 0 0 11.001-10.7 10.615 10.615 0 0 0-11-10.7m0 19.4a9.9 9.9 0 0 1-2.635-.35 1.8 1.8 0 0 0-1.196.092l-1.714.756-.045-1.493A1.8 1.8 0 0 0 5.8 18.13 8.49 8.49 0 0 1 2.99 11.7a8.66 8.66 0 0 1 9-8.7 8.705 8.705 0 1 1 0 17.4m3.735-11.815-2.313 2.755-3.347-2.056a1 1 0 0 0-1.289.21L5.726 13.13a1 1 0 1 0 1.53 1.285l2.499-2.975 3.347 2.056a1 1 0 0 0 1.289-.21l2.866-3.415a1 1 0 1 0-1.531-1.286' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFacebookMessengerAlt);
export default ForwardRef;
