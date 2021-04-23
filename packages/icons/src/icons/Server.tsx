import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgServer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 17a1 1 0 101 1 1 1 0 00-1-1zm-6 0H6a1 1 0 000 2h3a1 1 0 000-2zm9 0a1 1 0 101 1 1 1 0 00-1-1zm-3-6a1 1 0 101 1 1 1 0 00-1-1zm-6 0H6a1 1 0 000 2h3a1 1 0 000-2zm9-6a1 1 0 101 1 1 1 0 00-1-1zm0 6a1 1 0 101 1 1 1 0 00-1-1zm4-6a3 3 0 00-3-3H5a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 002 11v2a3 3 0 00.78 2A3 3 0 002 17v2a3 3 0 003 3h14a3 3 0 003-3v-2a3 3 0 00-.78-2 3 3 0 00.78-2v-2a3 3 0 00-.78-2A3 3 0 0022 7zm-2 14a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1zm0-6a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1zm0-6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1zm-5-2a1 1 0 101 1 1 1 0 00-1-1zM9 5H6a1 1 0 000 2h3a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgServer);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;