import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBath(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 12H5V6.41a1.975 1.975 0 011.04-1.759 1.995 1.995 0 011.148-.23 3.491 3.491 0 00.837 3.554l1.06 1.06a1 1 0 001.415 0L14.035 5.5a1 1 0 000-1.414l-1.06-1.06a3.494 3.494 0 00-4.53-.343A3.992 3.992 0 003 6.41V12H2a1 1 0 000 2h1v3a2.995 2.995 0 002 2.816V21a1 1 0 002 0v-1h10v1a1 1 0 002 0v-1.184A2.995 2.995 0 0021 17v-3h1a1 1 0 000-2zM9.44 4.44a1.502 1.502 0 012.12 0l.354.353-2.121 2.121-.354-.353a1.501 1.501 0 010-2.122zM19 17a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBath);
export default ForwardRef;
