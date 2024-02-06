import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTaxi = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17.38 14.58a1 1 0 0 0-.58-.06.6.6 0 0 0-.18.06.8.8 0 0 0-.18.09l-.15.12a1.05 1.05 0 0 0-.29.71 1 1 0 0 0 .29.71 1.2 1.2 0 0 0 .33.22 1 1 0 0 0 1.09-.22 1.2 1.2 0 0 0 .21-.33.84.84 0 0 0 .08-.38 1.05 1.05 0 0 0-.29-.71.9.9 0 0 0-.33-.21m2.62-3.9V7.5a3 3 0 0 0-3-3h-.78l-.77-2.32a1 1 0 0 0-.95-.68h-5a1 1 0 0 0-.95.68L7.78 4.5H7a3 3 0 0 0-3 3v3.18a3 3 0 0 0-2 2.82v6a1 1 0 0 0 1 1h1v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 1-1v-6a3 3 0 0 0-2-2.82M10.22 3.5h3.56l.33 1H9.89ZM6 7.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3H6Zm14 11H4v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6.62 14.58a1 1 0 0 0-.33.21 1.05 1.05 0 0 0-.29.71 1 1 0 0 0 1.38.93 1.2 1.2 0 0 0 .33-.22A1 1 0 0 0 8 15.5a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21M13 14.5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTaxi);
export default ForwardRef;
