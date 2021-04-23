import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLaptopCloud(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.5 10H10a3 3 0 001.07-5.8 4 4 0 00-7.48 1A2.5 2.5 0 004.5 10zm0-3a1 1 0 001-1 2 2 0 013.89-.64 1 1 0 00.78.66A1 1 0 0111 7a1 1 0 01-1 1H4.5a.5.5 0 010-1zM21 16h-1V9a3 3 0 00-3-3h-1a1 1 0 000 2h1a1 1 0 011 1v7H6v-3a1 1 0 00-2 0v3H3a1 1 0 00-1 1v2a3 3 0 003 3h14a3 3 0 003-3v-2a1 1 0 00-1-1zm-1 3a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLaptopCloud);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;