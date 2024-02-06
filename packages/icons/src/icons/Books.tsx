import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBooks = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m22.47 18.82-1-3.86-3.15-11.59a1 1 0 0 0-1.22-.71l-3.87 1a1 1 0 0 0-.73-.33h-10a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8l2.2 8.22a1 1 0 0 0 1 .74 1.2 1.2 0 0 0 .26 0L21.79 20a1 1 0 0 0 .61-.47 1.05 1.05 0 0 0 .07-.71m-16 .55h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm5 12h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm2.25-1.74 2.9-.78.52 1.93-2.9.78Zm2.59 9.66-1.55-5.8 2.9-.78 1.55 5.8Zm1 3.86-.52-1.93 2.9-.78.52 1.93Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBooks);
export default ForwardRef;
