import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAbacus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2a1 1 0 00-1 1v3h-4V5a1 1 0 00-2 0v1h-2V5a1 1 0 00-2 0v1H8V5a1 1 0 00-2 0v1H4V3a1 1 0 00-2 0v16a3 3 0 003 3h14a3 3 0 003-3V3a1 1 0 00-1-1zm-1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-3h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h4v1a1 1 0 002 0v-1h2zm0-5h-2v-1a1 1 0 00-2 0v1h-4v-1a1 1 0 00-2 0v1H8v-1a1 1 0 00-2 0v1H4V8h2v1a1 1 0 002 0V8h2v1a1 1 0 002 0V8h2v1a1 1 0 002 0V8h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAbacus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
