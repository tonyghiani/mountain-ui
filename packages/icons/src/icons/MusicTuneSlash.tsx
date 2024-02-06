import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMusicTuneSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 7.33a1 1 0 0 0 1-1v-.55l6-1.5v2.94L14.7 8.3a1 1 0 0 0 .24 2h.24L20.24 9h.07l.19-.09.15-.1a1 1 0 0 0 .13-.15.8.8 0 0 0 .1-.15.6.6 0 0 0 .06-.18.7.7 0 0 0 0-.19A.24.24 0 0 0 21 8V3a1 1 0 0 0-1.24-1l-8 2A1 1 0 0 0 11 5v1.33a1 1 0 0 0 1 1m9.71 13-9-9-9-9a1 1 0 0 0-1.42 1.38l8.71 8.7v2.94A3.45 3.45 0 0 0 9.5 15a3.5 3.5 0 1 0 3.5 3.5v-4.09l7.29 7.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM9.5 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 20' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMusicTuneSlash);
export default ForwardRef;
