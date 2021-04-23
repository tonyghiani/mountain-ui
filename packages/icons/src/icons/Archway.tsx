import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArchway(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 20h-1V8h1a1 1 0 000-2h-1V3a1 1 0 00-1-1H4a1 1 0 00-1 1v3H2a1 1 0 000 2h1v12H2a1 1 0 000 2h20a1 1 0 000-2zm-7 0H9v-3.53a6.21 6.21 0 013-5.33 6.21 6.21 0 013 5.33zm4 0h-2v-3.53a8.17 8.17 0 00-4.55-7.36 1 1 0 00-.9 0A8.17 8.17 0 007 16.47V20H5V8h14zm0-14H5V4h14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArchway);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;