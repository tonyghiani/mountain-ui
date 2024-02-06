import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCarWash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7.5 4a1 1 0 0 0 .71-.29l1-1a1 1 0 0 0-1.42-1.42l-1 1a1 1 0 0 0 0 1.42A1 1 0 0 0 7.5 4m4 0a1 1 0 0 0 .71-.29l1-1a1 1 0 1 0-1.42-1.42l-1 1a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29m4 0a1 1 0 0 0 .71-.29l1-1a1 1 0 1 0-1.42-1.42l-1 1a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29m2.42 11.62a.8.8 0 0 0-.09-.18l-.12-.15-.15-.12a.8.8 0 0 0-.18-.09.6.6 0 0 0-.19-.06 1 1 0 0 0-.9.27 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .29.7.9.9 0 0 0 .33.22A1 1 0 0 0 17 17a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18m1.84-4.51L18.4 7.05a3 3 0 0 0-2.84-2H8.44a3 3 0 0 0-2.84 2l-1.36 4.06A3 3 0 0 0 2 14v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1.18A3 3 0 0 0 22 18v-4a3 3 0 0 0-2.24-2.89M7.49 7.68A1 1 0 0 1 8.44 7h7.12a1 1 0 0 1 1 .68L17.61 11H6.39ZM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-7-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-5.08.62a.8.8 0 0 0-.09-.18l-.12-.15a1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.08.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 1.71.7A1 1 0 0 0 8 16a1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCarWash);
export default ForwardRef;
