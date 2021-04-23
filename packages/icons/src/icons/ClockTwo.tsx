import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClockTwo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.01 8.01 0 01-8 8zm2.098-10.366L13 10.268V7a1 1 0 00-2 0v5a1 1 0 001.5.866l2.598-1.5a1 1 0 10-1-1.732z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClockTwo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;