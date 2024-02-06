import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgShutterAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 11a1 1 0 0 1 0-.16c0-.28-.08-.56-.13-.84A9.5 9.5 0 0 0 21 7.62a10 10 0 0 0-7-5.41l-.84-.13h-.53L12 2h-1.16l-.84.2A10 10 0 0 0 2.21 10c-.05.28-.09.56-.13.84a1 1 0 0 1 0 .16v2a1 1 0 0 1 0 .16c0 .28.08.56.13.84A9.5 9.5 0 0 0 3 16.38a10 10 0 0 0 7 5.41l.84.13.16.08h1.01c.34 0 .68 0 1-.05h.16l.83-.15a10 10 0 0 0 7.79-7.8c.05-.28.09-.56.13-.84A1 1 0 0 1 22 13c0-.33.05-.67.05-1s-.05-.68-.05-1m-8.84-6.9.5.07A8 8 0 0 1 18.24 7h-6.82Zm-2.74.08.4-.06L7.38 10 5.7 7.08a8 8 0 0 1 4.67-2.91ZM4.59 15a8 8 0 0 1-.42-1.37c0-.22-.08-.45-.1-.68a.5.5 0 0 1 0-.12 8.2 8.2 0 0 1 0-1.62.5.5 0 0 1 0-.12c0-.23.06-.46.1-.68a8 8 0 0 1 .38-1.31L8 15Zm6.3 4.91-.5-.07A8 8 0 0 1 5.76 17h6.82ZM10.27 15l-1.73-3 1.73-3h3.46l1.73 3-1.73 3Zm3.36 4.83-.4.06L16.62 14l1.68 2.92a8 8 0 0 1-4.67 2.91m6.33-7a.5.5 0 0 1 0 .12c0 .23-.06.46-.1.68a8 8 0 0 1-.38 1.27L16 9h3.37a8 8 0 0 1 .42 1.37c0 .22.08.45.1.68a.5.5 0 0 1 0 .12 8.2 8.2 0 0 1 0 1.62Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgShutterAlt);
export default ForwardRef;
