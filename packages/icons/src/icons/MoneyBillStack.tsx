import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMoneyBillStack(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 1H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zM8 21H4a1 1 0 01-1-1v-1.18A3 3 0 004 19h4zm0-4H4a1 1 0 01-1-1v-1.18A3 3 0 004 15h4zm0-4H4a1 1 0 01-1-1V4a1 1 0 011-1h4zm6 8h-4v-6h4zm0-8h-4V3h4zm7 7a1 1 0 01-1 1h-4v-2h4a3 3 0 001-.18zm0-4a1 1 0 01-1 1h-4v-2h4a3 3 0 001-.18zm0-4a1 1 0 01-1 1h-4V3h4a1 1 0 011 1zm-3-5a1 1 0 101 1 1 1 0 00-1-1zM6 9a1 1 0 10-1-1 1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneyBillStack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;