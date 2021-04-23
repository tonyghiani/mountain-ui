import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgKeySkeleton(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 4.41l.71-.7a1 1 0 10-1.42-1.42l-1.4 1.41-2.83 2.83-6.31 6.3a5 5 0 101.42 1.42l5.59-5.6 2.12 2.13a1 1 0 101.41-1.42l-2.12-2.12 1.42-1.41.7.7a1 1 0 101.42-1.41zM7 20a3 3 0 113-3 3 3 0 01-3 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeySkeleton);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
