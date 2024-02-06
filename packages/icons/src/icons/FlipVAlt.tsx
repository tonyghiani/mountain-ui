import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFlipVAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M4.94 12.24a1 1 0 0 0-1.21.76l-.49 1.94A1 1 0 0 0 4 16.12a1 1 0 0 0 1.21-.73l.49-1.94a1 1 0 0 0-.76-1.21m17 7.52-4-16A1 1 0 0 0 17 3h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7a1 1 0 0 0 .79-.38 1 1 0 0 0 .21-.86ZM15 19V5h1.22l3.5 14ZM6.4 6.42a1 1 0 0 0-1.22.73L4.7 9.09a1 1 0 0 0 .73 1.21h.24a1 1 0 0 0 1-.76l.48-1.94a1 1 0 0 0-.75-1.18M7.51 5h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2M4.24 19a1 1 0 0 0-2-.24l-.24 1a1 1 0 0 0 .18.86A1 1 0 0 0 3 21h1a1 1 0 0 0 .24-2M10 6.51a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m0 6a1 1 0 0 0-.86.49H8a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1v-.49a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFlipVAlt);
export default ForwardRef;
