import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSnowflake = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M4.93 17.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M19.07 6.34a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0m-12.73 0a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0m11.32 11.32a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M21 11h-1.59l1.3-1.29a1 1 0 0 0-1.42-1.42L16.59 11h-2.18l2.3-2.29a1 1 0 1 0-1.42-1.42L13 9.59V7.41l2.71-2.7a1 1 0 1 0-1.42-1.42L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1 1 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3v2.18l-2.71 2.7a1 1 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13 16.59v-2.18l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L14.41 13h2.18l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L19.41 13H21a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSnowflake);
export default ForwardRef;
