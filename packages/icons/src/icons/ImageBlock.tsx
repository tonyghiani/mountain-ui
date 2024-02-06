import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgImageBlock = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.54 2.46A5 5 0 1 0 22 6a5 5 0 0 0-1.46-3.54M14 6a3 3 0 0 1 3-3 3 3 0 0 1 1.29.3l-4 4A3 3 0 0 1 14 6m5.12 2.12a3.08 3.08 0 0 1-3.4.57l4-4A3 3 0 0 1 20 6a3 3 0 0 1-.88 2.12M19 13a1 1 0 0 0-1 1v.39l-1.48-1.49a2.87 2.87 0 0 0-3.93 0l-.7.71-2.48-2.49a2.87 2.87 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 .95-.17h.09A3 3 0 0 0 20 19.44a1.4 1.4 0 0 0 0-.22V14a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.57l2.9-2.89a.79.79 0 0 1 1.09 0l3.19 3.18L15.46 20Zm13-1a1 1 0 0 1-.18.54L13.3 15l.71-.7a.79.79 0 0 1 1.09 0l2.9 2.91Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgImageBlock);
export default ForwardRef;
