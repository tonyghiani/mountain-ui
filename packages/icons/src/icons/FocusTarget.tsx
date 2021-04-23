import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFocusTarget(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 9a1 1 0 001-1V5a1 1 0 011-1h3a1 1 0 000-2H5a3 3 0 00-3 3v3a1 1 0 001 1zm5 11H5a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h3a1 1 0 000-2zm9-7a1 1 0 000-2h-1.14A4 4 0 0013 8.14V7a1 1 0 00-2 0v1.14A4 4 0 008.14 11H7a1 1 0 000 2h1.14A4 4 0 0011 15.86V17a1 1 0 002 0v-1.14A4 4 0 0015.86 13zm-5 1a2 2 0 112-2 2 2 0 01-2 2zm9 1a1 1 0 00-1 1v3a1 1 0 01-1 1h-3a1 1 0 000 2h3a3 3 0 003-3v-3a1 1 0 00-1-1zM19 2h-3a1 1 0 000 2h3a1 1 0 011 1v3a1 1 0 002 0V5a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFocusTarget);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;