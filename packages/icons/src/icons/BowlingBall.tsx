import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBowlingBall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.992 8.002a1 1 0 101 1 1 1 0 00-1-1zm4-6a10 10 0 1010 10 10.012 10.012 0 00-10-10zm0 18a8 8 0 118-8 8.01 8.01 0 01-8 8zm-1-10a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBowlingBall);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
