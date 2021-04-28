import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDiary(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 2H5a1 1 0 00-1 1v16a1 1 0 001 1h1v1a1 1 0 001 1 1 1 0 001-1v-1h9a3 3 0 003-3V5a3 3 0 00-3-3zm-3 16H6V4h8zm4-1a1 1 0 01-1 1h-1V4h1a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDiary);
export default ForwardRef;
