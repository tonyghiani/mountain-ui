import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDiaryAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 2H5a1 1 0 00-1 1v18a1 1 0 001 1h12a3 3 0 003-3V5a3 3 0 00-3-3zM8 20H6V4h2zm10-1a1 1 0 01-1 1h-7V4h7a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDiaryAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
