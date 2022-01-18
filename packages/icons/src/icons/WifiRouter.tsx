import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWifiRouter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.9 17a1 1 0 101 1 1 1 0 00-1-1zm-3 0a1 1 0 101 1 1 1 0 00-1-1zm6 0a1 1 0 101 1 1 1 0 00-1-1zM15 8.5a1 1 0 011.73 0 1 1 0 001.36.37 1 1 0 00.41-1.37 3 3 0 00-5.2 0 1 1 0 001.7 1zm7-3a7 7 0 00-12.12 0 1 1 0 00.37 1.37 1 1 0 00.45.13 1 1 0 00.87-.5 5 5 0 018.66 0 1 1 0 001.37.37A1 1 0 0022 5.5zM17.9 14h-1v-3a1 1 0 10-2 0v3h-10a3 3 0 00-3 3v2a3 3 0 003 3h13a3 3 0 003-3v-2a3 3 0 00-3-3zm1 5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-2a1 1 0 011-1h13a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWifiRouter);
export default ForwardRef;
