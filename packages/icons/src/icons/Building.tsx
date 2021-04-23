import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBuilding(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 8h1a1 1 0 000-2h-1a1 1 0 000 2zm0 4h1a1 1 0 000-2h-1a1 1 0 000 2zM9 8h1a1 1 0 000-2H9a1 1 0 000 2zm0 4h1a1 1 0 000-2H9a1 1 0 000 2zm12 8h-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v17H3a1 1 0 000 2h18a1 1 0 000-2zm-8 0h-2v-4h2zm5 0h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6V4h12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBuilding);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
