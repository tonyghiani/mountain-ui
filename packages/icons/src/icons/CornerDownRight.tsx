import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerDownRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.61 16a1.19 1.19 0 00-.22-.33L14.76 11a1 1 0 00-1.41 1.41l2.92 2.92h-7a3 3 0 01-3-3V3a1 1 0 10-2 0v9.37a5 5 0 005 5h7l-2.92 2.92a1 1 0 000 1.42 1 1 0 00.71.29 1 1 0 00.7-.29l4.63-4.63a1 1 0 00.22-.33 1 1 0 000-.75z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerDownRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;