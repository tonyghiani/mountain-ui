import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMoneyWithdrawal(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3v9a1 1 0 001 1h12a1 1 0 001-1v-9h3a1 1 0 001-1V3a1 1 0 00-1-1zM7 20v-2a2 2 0 012 2zm10 0h-2a2 2 0 012-2zm0-4a4 4 0 00-4 4h-2a4 4 0 00-4-4V8h10zm4-6h-2V7a1 1 0 00-1-1H6a1 1 0 00-1 1v3H3V4h18zm-9 5a3 3 0 10-3-3 3 3 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneyWithdrawal);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;