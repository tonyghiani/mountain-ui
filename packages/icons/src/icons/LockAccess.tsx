import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLockAccess(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2h-6a1 1 0 000 2h5v5a1 1 0 002 0V3a1 1 0 00-1-1zm0 12a1 1 0 00-1 1v5h-5a1 1 0 000 2h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-9-8a3 3 0 00-3 3v1a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2V9a3 3 0 00-3-3zm-1 3a1 1 0 012 0v1h-2zm4 7H9v-4h6zM3 10a1 1 0 001-1V4h5a1 1 0 000-2H3a1 1 0 00-1 1v6a1 1 0 001 1zm6 10H4v-5a1 1 0 00-2 0v6a1 1 0 001 1h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLockAccess);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;