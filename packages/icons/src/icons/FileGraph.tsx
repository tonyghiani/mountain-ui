import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileGraph(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 10h1a1 1 0 000-2H9a1 1 0 000 2zm5.21 2.386l-1.673 2.152-.868-.781a1 1 0 00-1.45.118l-2 2.5a1 1 0 101.562 1.25l1.338-1.673.879.791a1 1 0 001.458-.13l2.334-3a1 1 0 00-1.58-1.227zm5.778-3.448a1.009 1.009 0 00-.28-.643l-.001-.002-6-6-.001-.001a.99.99 0 00-.287-.193c-.03-.014-.06-.022-.092-.033a.983.983 0 00-.267-.054C13.04 2.011 13.021 2 13 2H7a3.003 3.003 0 00-3 3v14a3.003 3.003 0 003 3h10a3.003 3.003 0 003-3V9c0-.022-.011-.04-.012-.062zM14 5.414L16.586 8H15a1.001 1.001 0 01-1-1zM18 19a1.001 1.001 0 01-1 1H7a1.001 1.001 0 01-1-1V5a1.001 1.001 0 011-1h5v3a3.003 3.003 0 003 3h3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileGraph);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;