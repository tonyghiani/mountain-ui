import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileCheck = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0 .9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Zm-3.71-6.71L11 15.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileCheck);
export default ForwardRef;
