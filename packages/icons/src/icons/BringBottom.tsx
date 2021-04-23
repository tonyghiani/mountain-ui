import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBringBottom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 14h-2a1 1 0 100 2h1v4H4v-4h7a1 1 0 000-2h-1V9a1 1 0 00-1-1H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1v-6a1 1 0 00-1-1zM4 10h4v4H4zm8.71-3.3L14 5.41V17a1 1 0 102 0V5.41l1.29 1.29A1 1 0 0018 7a1 1 0 00.71-.29 1 1 0 000-1.41l-3-3a1 1 0 00-1.42 0l-3 3a1 1 0 000 1.41 1 1 0 001.42-.01z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBringBottom);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;