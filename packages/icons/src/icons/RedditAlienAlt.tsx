import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRedditAlienAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.41 16.867a3.38 3.38 0 0 1-2.368.633 3.37 3.37 0 0 1-2.365-.632 1 1 0 0 0-1.416 1.414 5.1 5.1 0 0 0 3.781 1.218 5.12 5.12 0 0 0 3.782-1.217 1 1 0 1 0-1.414-1.416M9.2 15.002a1 1 0 1 0-1-1 1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1M23 11.78a3.772 3.772 0 0 0-6.794-2.264 16.5 16.5 0 0 0-3.05-.479l.856-5.705 2.087.71a2.997 2.997 0 0 0 5.994-.064v-.023a3.03 3.03 0 0 0-3-2.955 2.98 2.98 0 0 0-2.332 1.155l-3.239-1.101a1 1 0 0 0-1.311.798l-1.077 7.175a16.7 16.7 0 0 0-3.34.489 3.768 3.768 0 0 0-6.225 4.234A4.86 4.86 0 0 0 1 16c0 3.925 4.832 7 11 7s11-3.075 11-7a4.86 4.86 0 0 0-.569-2.249 3.8 3.8 0 0 0 .569-1.97M19.093 3a1 1 0 1 1-1 1 1.017 1.017 0 0 1 1-1M4.78 10a1.76 1.76 0 0 1 .882.25 10 10 0 0 0-2.648 1.673C3.01 11.876 3 11.828 3 11.78A1.783 1.783 0 0 1 4.78 10M12 21c-4.879 0-9-2.29-9-5s4.121-5 9-5 9 2.29 9 5-4.121 5-9 5m8.986-9.077a10 10 0 0 0-2.648-1.673 1.76 1.76 0 0 1 .882-.25A1.783 1.783 0 0 1 21 11.78c0 .048-.01.096-.014.143' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRedditAlienAlt);
export default ForwardRef;
