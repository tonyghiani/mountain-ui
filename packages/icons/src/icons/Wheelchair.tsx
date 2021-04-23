import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWheelchair(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 6.5a2 2 0 10-2-2 2 2 0 002 2zm7.5 14h-1v-5a1 1 0 00-1-1h-5v-2h5a1 1 0 000-2h-5v-2a1 1 0 00-2 0v7a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 000-2zm-6.8-1.6a4 4 0 01-7.2-2.4 4 4 0 012.4-3.66A1 1 0 107.1 11a6 6 0 107.2 9.1 1 1 0 00-1.6-1.2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWheelchair);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;