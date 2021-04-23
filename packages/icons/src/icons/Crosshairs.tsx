import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCrosshairs(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11h-1.07A8 8 0 0013 4.07V3a1 1 0 00-2 0v1.07A8 8 0 004.07 11H3a1 1 0 000 2h1.07A8 8 0 0011 19.93V21a1 1 0 002 0v-1.07A8 8 0 0019.93 13H21a1 1 0 000-2zm-9 7a6 6 0 116-6 6 6 0 01-6 6zm0-9a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCrosshairs);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;