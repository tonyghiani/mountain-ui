import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.81 12.28a3.73 3.73 0 001-2.5 3.78 3.78 0 00-7.56 0 3.73 3.73 0 001 2.5A5.94 5.94 0 006 16.89a1 1 0 002 .22 4 4 0 017.94 0A1 1 0 0017 18h.11a1 1 0 00.88-1.1 5.94 5.94 0 00-3.18-4.62zM12 11.56a1.78 1.78 0 111.78-1.78A1.78 1.78 0 0112 11.56zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;