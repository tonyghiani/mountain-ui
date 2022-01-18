import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgUserLocation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M14.49 10.86a3.09 3.09 0 10-5 0 4.67 4.67 0 00-1.12 1A1 1 0 1010 13.12a2.62 2.62 0 012.05-1 2.62 2.62 0 012.05 1 1 1 0 00.78.37 1 1 0 00.78-1.62 4.67 4.67 0 00-1.17-1.01zM12 10.13A1.09 1.09 0 1113.09 9 1.09 1.09 0 0112 10.13zm8.46-.5A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserLocation);
export default ForwardRef;
