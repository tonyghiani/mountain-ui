import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHipchat = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17.5 13.9c0-.2-.2-.4-.4-.4-.1 0-.2 0-.3.1-1.3 1.1-3 1.7-4.8 1.7-1.7 0-3.4-.6-4.8-1.7-.1-.1-.2-.1-.3-.1-.2 0-.4.2-.4.4s.1.3.2.5C8 16 10 16.9 12 16.8c2 .1 3.9-.8 5.2-2.4.2-.2.2-.3.3-.5m2.7 6.9c-.8-.4-1.4-1.2-1.7-2-.1-.2 0-.3.1-.4 2.1-1.5 3.3-3.9 3.3-6.4 0-4.8-4.5-8.6-10-8.6s-10 3.9-10 8.6c0 4.8 4.5 8.6 10 8.6.7 0 1.4-.1 2.1-.2.1 0 .3 0 .4.1 1.6.9 3.4 1.5 5.2 1.5.4.1.7-.2.8-.6v-.1c.1-.2 0-.4-.2-.5m-2.7-.8v.1c0 .1-.1.1-.1.1-1.1-.3-2-.8-2.9-1.5-.1-.1-.3-.1-.5-.1-.7.2-1.4.2-2.1.2-4.6 0-8.3-3.1-8.3-6.9S7.3 5 11.9 5s8.3 3.1 8.3 6.9c-.1 2.3-1.4 4.4-3.4 5.5-.2.1-.3.3-.3.4.3.9.6 1.6 1 2.2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHipchat);
export default ForwardRef;
