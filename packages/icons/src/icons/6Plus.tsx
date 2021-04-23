import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function Svg6Plus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 5h1v1a1 1 0 002 0V5h1a1 1 0 000-2h-1V2a1 1 0 00-2 0v1h-1a1 1 0 000 2zm-6.5 3h1a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-1a3 3 0 00-3 3v6a3 3 0 003 3h1a3 3 0 003-3v-1a3 3 0 00-3-3h-2V9a1 1 0 011-1zm1 5a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2zm9.1-4a1 1 0 00-.78 1.18 9 9 0 11-7-7 1 1 0 10.4-2A10.8 10.8 0 0012 1a11 11 0 1011 11 10.8 10.8 0 00-.22-2.2A1 1 0 0021.6 9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(Svg6Plus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;