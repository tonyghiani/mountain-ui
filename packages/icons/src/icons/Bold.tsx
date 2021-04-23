import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBold(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.5 9.5A3.5 3.5 0 0013 6H8.5a1 1 0 00-1 1v10a1 1 0 001 1H13a3.49 3.49 0 002.44-6 3.5 3.5 0 001.06-2.5zM13 16H9.5v-3H13a1.5 1.5 0 010 3zm0-5H9.5V8H13a1.5 1.5 0 010 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBold);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
