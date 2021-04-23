import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPaintTool(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 1h-8a3 3 0 00-3 3H6a3 3 0 00-3 3v3a3 3 0 003 3h6a1 1 0 011 1v1a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2v-1a3 3 0 00-3-3H6a1 1 0 01-1-1V7a1 1 0 011-1h1a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 01-1 1h-8a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPaintTool);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;