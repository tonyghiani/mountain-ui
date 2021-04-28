import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRopeWay(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6.5h-6V4h4.62a1 1 0 000-2H6.38a1 1 0 100 2H11v2.5H5a3 3 0 00-3 3V19a3 3 0 003 3h14a3 3 0 003-3V9.5a3 3 0 00-3-3zM11 20H5a1 1 0 01-1-1v-3.75h7a.5.5 0 000 .13v4.5a.53.53 0 000 .12zm9-1a1 1 0 01-1 1h-6a.53.53 0 000-.12v-4.5a.5.5 0 000-.13h7zm0-5.75H4V9.5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRopeWay);
export default ForwardRef;
