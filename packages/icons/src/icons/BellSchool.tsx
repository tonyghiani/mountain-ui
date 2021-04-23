import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBellSchool(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 8a2 2 0 10-2.27 2 4.49 4.49 0 01-3 5.85 3 3 0 00-1.3-1.43 7 7 0 10-10.9 0A3 3 0 002 17v1a3 3 0 003 3h8a3 3 0 003-3v-.19a6.47 6.47 0 004.58-8.59A2 2 0 0021 8zm-7 10a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1h.41a6.94 6.94 0 007.18 0H13a1 1 0 011 1zm-5-3a5 5 0 115-5 5 5 0 01-5 5zm0-6a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBellSchool);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;