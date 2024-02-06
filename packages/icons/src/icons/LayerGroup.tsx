import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLayerGroup = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m2.5 8.86 9 5.2a1 1 0 0 0 1 0l9-5.2A1 1 0 0 0 22 8a1 1 0 0 0-.5-.87l-9-5.19a1 1 0 0 0-1 0l-9 5.19A1 1 0 0 0 2 8a1 1 0 0 0 .5.86M12 4l7 4-7 4-7-4Zm8.5 7.17L12 16l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Zm0 4L12 20l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLayerGroup);
export default ForwardRef;
