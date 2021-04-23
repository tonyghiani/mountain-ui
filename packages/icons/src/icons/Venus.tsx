import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgVenus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 9a7 7 0 10-8 6.92V18h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-2.08A7 7 0 0019 9zm-7 5a5 5 0 115-5 5 5 0 01-5 5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVenus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
