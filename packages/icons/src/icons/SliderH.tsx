import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSliderH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11h-3.184a2.982 2.982 0 00-5.632 0H3a1 1 0 000 2h9.184a2.982 2.982 0 005.632 0H21a1 1 0 000-2zm-6 2a1 1 0 111-1 1.001 1.001 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSliderH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
