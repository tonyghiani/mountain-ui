import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCrockery(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 12.15V3a1 1 0 00-2 0v9.15a4.16 4.16 0 00-3 4c0 2.05 1.52 5.8 4 5.8s4-3.75 4-5.8a4.16 4.16 0 00-3-4zM17 20c-.8 0-2-2.27-2-3.8a2.11 2.11 0 012-2.2 2.11 2.11 0 012 2.2c0 1.53-1.2 3.8-2 3.8zM10 2a1 1 0 00-1 1v5.46l-1 .67V3a1 1 0 00-2 0v6.13l-1-.67V3a1 1 0 00-2 0v6a1 1 0 00.45.83L6 11.54V21a1 1 0 002 0v-9.46l2.55-1.71A1 1 0 0011 9V3a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCrockery);
export default ForwardRef;
