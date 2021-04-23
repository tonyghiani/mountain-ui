import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeMinus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 8a1 1 0 00-1 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V7.41l5.88 5.88a3 3 0 004.24 0l3.59-3.58a1 1 0 00-1.42-1.42l-3.58 3.59a1 1 0 01-1.42 0L5.41 6H13a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a1 1 0 00-1-1zm-4-2h4a1 1 0 000-2h-4a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeMinus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
