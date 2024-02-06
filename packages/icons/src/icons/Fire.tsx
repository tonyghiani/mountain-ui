import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFire = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.2 1.2 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.8 5.8 0 0 1-1.398 1.778 8.7 8.7 0 0 0 .134-1.51 8.71 8.71 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.02 7.02 0 0 1-2.471 4.942l-.23.187a8.5 8.5 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1 1 0 0 0-.05-.312 7 7 0 0 1-.19-2.581 9 9 0 0 0 4.313 4.016 1 1 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863m-3.905 12.831a6.96 6.96 0 0 1-3.577-4.402 9 9 0 0 1-.18-.964 1 1 0 0 0-.799-.845 1 1 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.96 8.96 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.6 6.6 0 0 1 1.562-1.458 1 1 0 0 0 .075-.055s.296-.245.306-.25a8.97 8.97 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.86 7.86 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFire);
export default ForwardRef;
