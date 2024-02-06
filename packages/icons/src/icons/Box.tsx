import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBox = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.49 7.52a.2.2 0 0 1 0-.08.2.2 0 0 1 0-.07v-.09l-.06-.15a.5.5 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49-3.72-2.3a.9.9 0 0 0-.29-.15h-.08a.8.8 0 0 0-.27 0h-.1a1.1 1.1 0 0 0-.33.13L4 6.78l-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.7.7 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06L20 17.21a1 1 0 0 0 .47-.85V7.63s.02-.07.02-.11M12 4.17l1.78 1.1-5.59 3.46-1.79-1.1Zm-1 15-5.5-3.36V9.42l5.5 3.4Zm1-8.11-1.91-1.15 5.59-3.47 1.92 1.19Zm6.5 4.72L13 19.2v-6.38l5.5-3.4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBox);
export default ForwardRef;
