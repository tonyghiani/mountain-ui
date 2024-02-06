import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgYenCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9m2.83-14.55L12 10.7 9.17 6.45a1 1 0 0 0-1.39-.28 1 1 0 0 0-.28 1.38l2.11 3.17H9a1 1 0 0 0 0 2h2l.05.08v.92H9a1 1 0 0 0 0 2h2V18a1 1 0 0 0 2 0v-2.28h2a1 1 0 0 0 0-2h-2v-.92l.05-.08H15a1 1 0 0 0 0-2h-.61l2.11-3.17a1 1 0 0 0-.28-1.38 1 1 0 0 0-1.39.28' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgYenCircle);
export default ForwardRef;
