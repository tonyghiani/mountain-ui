import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUsdSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 9h4a1 1 0 000-2h-2V6a1 1 0 00-2 0v1a3 3 0 000 6h2a1 1 0 010 2H9a1 1 0 000 2h2v1a1 1 0 002 0v-1a3 3 0 000-6h-2a1 1 0 010-2zm8-7H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUsdSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;