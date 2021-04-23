import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPause(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3zm1 17a1 1 0 01-2 0V5a1 1 0 012 0zM8 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3zm1 17a1 1 0 01-2 0V5a1 1 0 012 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPause);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
