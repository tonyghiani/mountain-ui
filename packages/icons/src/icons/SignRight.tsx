import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSignRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 6v5a1 1 0 001 1h3v8H9a1 1 0 000 2h6a1 1 0 000-2h-2v-8h5a1 1 0 00.78-.37l2-2.5a1 1 0 000-1.25l-2-2.5A1 1 0 0018 5h-5V3a1 1 0 00-2 0v2H8a1 1 0 00-1 1zm2 1h8.52l1.2 1.5-1.2 1.5H9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
