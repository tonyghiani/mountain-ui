import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFolderSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.71 20.29-1.6-1.6-16.4-16.4a1 1 0 0 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v11a3 3 0 0 0 3 3h12a3 3 0 0 0 1.29-.3l1 1a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41M6 19a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L17.59 19Zm4.62-13a1 1 0 0 1 .89.67l.54 1.64A1 1 0 0 0 13 9h5a1 1 0 0 1 1 1v4.34a1 1 0 1 0 2 0V10a3 3 0 0 0-3-3h-4.28l-.32-1a3 3 0 0 0-2.68-2 1 1 0 0 0-.1 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFolderSlash);
export default ForwardRef;
