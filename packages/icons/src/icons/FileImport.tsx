import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileImport(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.32 1.32 0 00-.19-.29l-6-6a1.32 1.32 0 00-.29-.19.32.32 0 00-.09 0l-.31-.1H6a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L15.59 8H14a1 1 0 01-1-1zM19 15h-5.59l1.3-1.29a1 1 0 00-1.42-1.42l-3 3a1.15 1.15 0 00-.21.33 1 1 0 000 .76.93.93 0 00.21.33l3 3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 17H19a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileImport);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;