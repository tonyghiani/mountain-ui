import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMedicalSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1zM17 9h-2V7a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H7a1 1 0 00-1 1v4a1 1 0 001 1h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V8h2v2a1 1 0 001 1h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMedicalSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;