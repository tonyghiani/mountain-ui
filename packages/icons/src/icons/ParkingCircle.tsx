import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgParkingCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M13 7h-3a1 1 0 00-1 1v8a1 1 0 002 0v-2h2a3 3 0 003-3v-1a3 3 0 00-3-3zm1 4a1 1 0 01-1 1h-2V9h2a1 1 0 011 1zm-2-9a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgParkingCircle);
export default ForwardRef;
