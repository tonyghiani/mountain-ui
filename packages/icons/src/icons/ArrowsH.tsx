import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowsH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.92 11.62a1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H5.41l2.3-2.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.42 0 1 1 0 000-1.42L5.41 13h13.18l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
