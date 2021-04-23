import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBluetoothB(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.41 12l3.8-3.79a1 1 0 000-1.42l-4.5-4.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.54.54A1 1 0 0011 3v6.59l-2.79-2.8a1 1 0 10-1.42 1.42l3.8 3.79-3.8 3.79a1 1 0 101.42 1.42l2.79-2.8V21a1 1 0 00.08.38 1 1 0 00.54.54.94.94 0 00.76 0 1 1 0 00.33-.21l4.5-4.5a1 1 0 000-1.42zM13 5.41l2.09 2.09L13 9.59zm0 13.18v-4.18l2.09 2.09z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBluetoothB);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;