import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudDatabaseTree(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.5 14.5a2 2 0 00-2-2h-6a2 2 0 00-2 2h-3v-3h2.33A3.66 3.66 0 0013 4.37a5 5 0 00-9.43 1.28 3 3 0 00.93 5.85h3v8a1 1 0 001 1h4a2 2 0 002 2h6a2 2 0 002-2v-2a2 2 0 00-.28-1 2 2 0 00.28-1zm-18-5a1 1 0 010-2 1 1 0 001-1 3 3 0 015.84-1 1 1 0 00.78.66 1.65 1.65 0 011.38 1.67 1.67 1.67 0 01-1.67 1.67zm8 9h-3v-2h3a2 2 0 00.28 1 2 2 0 00-.28 1zm2 2v-2h6v2zm0-4v-2h6v2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudDatabaseTree);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;