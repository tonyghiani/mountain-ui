import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSick = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m.27 3.2a1 1 0 0 0-1.2 0l-.74.55-.73-.55a1 1 0 0 0-1.2 0l-.73.55-.74-.55a1 1 0 0 0-1.2 0l-1.33 1a1 1 0 1 0 1.2 1.6l.73-.55.74.55.12.06a.8.8 0 0 0 .22.08h.12a1 1 0 0 0 .25 0h.1a1.1 1.1 0 0 0 .34-.16l.73-.55.73.55a1 1 0 0 0 1 .11l.1-.05a.4.4 0 0 0 .11-.06l.74-.55.73.55a1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4 1 1 0 0 0-.2-1.4ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSick);
export default ForwardRef;
