import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSadCrying(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 00-3.41 19.39h.06a9.81 9.81 0 006.7 0h.06A10 10 0 0012 2zm2 17.74a7.82 7.82 0 01-4 0v-3.13a3.79 3.79 0 014 0zm2-.82V11a1 1 0 000-2h-2a1 1 0 000 2v3.39a6 6 0 00-4 0V11a1 1 0 000-2H8a1 1 0 000 2v7.92a8 8 0 118 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSadCrying);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
