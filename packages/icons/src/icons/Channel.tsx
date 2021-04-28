import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChannel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 16a3 3 0 00-1.73.56l-2.45-1.45A3.74 3.74 0 0016 14a4 4 0 00-3-3.86V7.82a3 3 0 10-2 0v2.32A4 4 0 008 14a3.74 3.74 0 00.18 1.11l-2.45 1.45A3 3 0 004 16a3 3 0 103 3 3 3 0 00-.12-.8l2.3-1.37a4 4 0 005.64 0l2.3 1.37A3 3 0 1020 16zM4 20a1 1 0 111-1 1 1 0 01-1 1zm8-16a1 1 0 11-1 1 1 1 0 011-1zm0 12a2 2 0 112-2 2 2 0 01-2 2zm8 4a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChannel);
export default ForwardRef;
