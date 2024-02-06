import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPanoramaHAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.46 5.83A1 1 0 0 0 20.7 5h-.11A37.5 37.5 0 0 0 3.41 5H3.3a1 1 0 0 0-.76.8 35.5 35.5 0 0 0 0 12.34 1 1 0 0 0 .76.8h.11A37.6 37.6 0 0 0 12 20a37.6 37.6 0 0 0 8.59-1h.11a1 1 0 0 0 .76-.8 35.5 35.5 0 0 0 0-12.37M19.6 17.17a35.4 35.4 0 0 1-15.2 0 33.2 33.2 0 0 1 0-10.34 35.4 35.4 0 0 1 15.2 0 33.2 33.2 0 0 1 0 10.34' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPanoramaHAlt);
export default ForwardRef;
