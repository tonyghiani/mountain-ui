import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPrint(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 10a1 1 0 101 1 1 1 0 00-1-1zm12-4h-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v3H5a3 3 0 00-3 3v6a3 3 0 003 3h1v3a1 1 0 001 1h10a1 1 0 001-1v-3h1a3 3 0 003-3V9a3 3 0 00-3-3zM8 4h8v2H8zm8 16H8v-4h8zm4-5a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1H7a1 1 0 00-1 1v1H5a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPrint);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;