import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBell(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 13.18V10a6 6 0 00-5-5.91V3a1 1 0 00-2 0v1.09A6 6 0 006 10v3.18A3 3 0 004 16v2a1 1 0 001 1h3.14a4 4 0 007.72 0H19a1 1 0 001-1v-2a3 3 0 00-2-2.82zM8 10a4 4 0 018 0v3H8zm4 10a2 2 0 01-1.72-1h3.44A2 2 0 0112 20zm6-3H6v-1a1 1 0 011-1h10a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBell);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
