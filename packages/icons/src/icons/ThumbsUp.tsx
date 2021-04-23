import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgThumbsUp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.3 10.08A3 3 0 0019 9h-4.56L15 7.57A4.13 4.13 0 0011.11 2a1 1 0 00-.91.59L7.35 9H5a3 3 0 00-3 3v7a3 3 0 003 3h12.73a3 3 0 002.95-2.46l1.27-7a3 3 0 00-.65-2.46zM7 20H5a1 1 0 01-1-1v-7a1 1 0 011-1h2zm13-7.82l-1.27 7a1 1 0 01-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 011.38 2.78l-.53 1.43a2 2 0 001.87 2.7H19a1 1 0 01.77.36 1 1 0 01.23.82z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThumbsUp);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;