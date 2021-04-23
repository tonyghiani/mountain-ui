import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMinusSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1zm-4-8H8a1 1 0 000 2h8a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMinusSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
