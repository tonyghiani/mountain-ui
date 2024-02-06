import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSpinner = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5.1 16c-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4.5-.3.6-.9.4-1.4m-.4-9.4c-.5-.2-1.1-.1-1.4.4-.2.5-.1 1.1.4 1.4.5.2 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4m15.6 1.8c.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4M4 12c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1m3.2 6.8c-.5.1-.9.7-.7 1.2.1.5.7.9 1.2.7.5-.1.9-.7.7-1.2-.1-.5-.6-.8-1.2-.7M21 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-.7 4.6c-.5-.3-1.1-.1-1.4.4s-.1 1.1.4 1.4 1.1.1 1.4-.4c.2-.5.1-1.1-.4-1.4M17 3.3c-.5-.3-1.1-.1-1.4.4s-.1 1.1.4 1.4 1.1.1 1.4-.4c.2-.5.1-1.1-.4-1.4m-.2 15.5c-.5-.1-1.1.2-1.2.7s.2 1.1.7 1.2 1.1-.2 1.2-.7-.2-1-.7-1.2M12 20c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-18c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSpinner);
export default ForwardRef;
