import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEnvelopeDownloadAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.29 8.79a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-.29.29V2.92a1 1 0 0 0-2 0v2.75l-.29-.29a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41ZM16 11.08H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-.42 2L12.7 16a1 1 0 0 1-1.4 0l-2.88-2.92Zm1.42 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4.59l2.88 2.88a3 3 0 0 0 4.24 0L17 14.49Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEnvelopeDownloadAlt);
export default ForwardRef;
