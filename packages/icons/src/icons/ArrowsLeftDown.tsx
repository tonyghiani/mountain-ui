import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowsLeftDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 16.29a1 1 0 00-1.42 0L18 18.59V9a3 3 0 00-3-3H5.41l2.3-2.29a1 1 0 00-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.42 0 1 1 0 000-1.42L5.41 8H15a1 1 0 011 1v9.59l-2.29-2.3a1 1 0 00-1.42 1.42l4 4a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsLeftDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
