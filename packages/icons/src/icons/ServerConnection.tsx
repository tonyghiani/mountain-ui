import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgServerConnection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 13a1 1 0 101 1 1 1 0 00-1-1zm-4 0a1 1 0 101 1 1 1 0 00-1-1zm15-9a3 3 0 00-3-3H5a3 3 0 00-3 3v4a3 3 0 00.78 2A3 3 0 002 12v4a3 3 0 003 3h6v2H3a1 1 0 000 2h18a1 1 0 000-2h-8v-2h6a3 3 0 003-3v-4a3 3 0 00-.78-2A3 3 0 0022 8zm-2 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h14a1 1 0 011 1zm0-8a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1h14a1 1 0 011 1zm-9-3a1 1 0 101 1 1 1 0 00-1-1zM7 5a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgServerConnection);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;