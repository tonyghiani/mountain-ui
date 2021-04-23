import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeAdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 7h1v1a1 1 0 002 0V7h1a1 1 0 000-2h-1V4a1 1 0 00-2 0v1h-1a1 1 0 000 2zm4 4a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 004.24 0l2.47-2.47a1 1 0 00-1.42-1.42l-2.47 2.47a1 1 0 01-1.4 0L5.41 7H13a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeAdd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
