import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLeftArrowToLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11H9.41l2.3-2.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.42 0 1 1 0 000-1.42L9.41 13H21a1 1 0 000-2zM3 3a1 1 0 00-1 1v16a1 1 0 002 0V4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLeftArrowToLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
