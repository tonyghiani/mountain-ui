import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgImageShield = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22.13 2.36a1 1 0 0 0-.84-.2 2.7 2.7 0 0 1-2.2-.47 1 1 0 0 0-1.18 0 2.7 2.7 0 0 1-2.2.47 1 1 0 0 0-.84.2 1 1 0 0 0-.37.78v3.31a4.63 4.63 0 0 0 1.84 3.7l1.57 1.16a1 1 0 0 0 1.18 0l1.57-1.16a4.63 4.63 0 0 0 1.84-3.7V3.14a1 1 0 0 0-.37-.78M20.5 6.45a2.62 2.62 0 0 1-1 2.09l-1 .72-1-.72a2.62 2.62 0 0 1-1-2.09V4.22a4.8 4.8 0 0 0 2-.54 4.8 4.8 0 0 0 2 .54Zm-2 7.05a1 1 0 0 0-1 1v.39L16 13.41a2.77 2.77 0 0 0-3.93 0l-.7.7-2.46-2.49a2.85 2.85 0 0 0-3.93 0L3.5 13.1V7.5a1 1 0 0 1 1-1h7a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1m-14 7a1 1 0 0 1-1-1v-3.57L6.4 13a.79.79 0 0 1 1.09 0l3.17 3.17L15 20.5Zm13-1a1 1 0 0 1-.18.53l-4.51-4.51.7-.7a.78.78 0 0 1 1.1 0l2.89 2.9Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgImageShield);
export default ForwardRef;
