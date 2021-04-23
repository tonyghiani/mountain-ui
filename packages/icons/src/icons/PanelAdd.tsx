import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPanelAdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 10h-4V3a1 1 0 00-1-1H8a1 1 0 00-1 1v5H3a1 1 0 00-1 1v12a1 1 0 001 1h15a1 1 0 001-1V11a1 1 0 00-1-1zM7 20H4V10h3zm5 0H9V4h3zm5 0h-3v-8h3zm4-16h-1V3a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0V6h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPanelAdd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
