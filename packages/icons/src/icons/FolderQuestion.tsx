import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFolderQuestion = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.57 16.3a.6.6 0 0 0-.15-.13l-.17-.09-.19-.08a1 1 0 0 0-.9.28 1 1 0 0 0-.22.32 1 1 0 0 0-.07.39 1 1 0 0 0 .29.7 1 1 0 0 0 .32.22 1 1 0 0 0 .39.07 1 1 0 0 0 .38-.07 1 1 0 0 0 .32-.22 1 1 0 0 0 .3-.7 1 1 0 0 0-.08-.39.9.9 0 0 0-.22-.3m-.7-7.3a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1 1 1 0 0 1 1.87.5 1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 0-6M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFolderQuestion);
export default ForwardRef;
