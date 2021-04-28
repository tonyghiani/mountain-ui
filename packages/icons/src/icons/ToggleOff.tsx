import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgToggleOff(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 8.5a3.5 3.5 0 103.5 3.5A3.5 3.5 0 008 8.5zm0 5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 13.5zM16 5H8a7 7 0 000 14h8a7 7 0 000-14zm0 12H8A5 5 0 018 7h8a5 5 0 010 10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgToggleOff);
export default ForwardRef;
