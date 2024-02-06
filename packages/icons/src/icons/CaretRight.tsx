import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCaretRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m19.5 11.13-14-8.08a1 1 0 0 0-1 0 1 1 0 0 0-.5.87v16.16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0l14-8.08a1 1 0 0 0 0-1.74M6 18.35V5.65L17 12Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCaretRight);
export default ForwardRef;
