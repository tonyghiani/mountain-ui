import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFont(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20h-1V3a1 1 0 00-1-1h-3.5a1 1 0 00-.86.5L4.43 20H3a1 1 0 000 2h4a1 1 0 000-2h-.26l3.5-6H18v6h-1a1 1 0 000 2h4a1 1 0 000-2zm-3-8h-6.59l4.66-8H18z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFont);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
