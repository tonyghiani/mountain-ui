import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSyncSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.88 15.5h-4.5a1 1 0 000 2h2.4A8 8 0 0112 20a8.08 8.08 0 01-3.12-.63l-1.49 1.49A9.83 9.83 0 0012 22a10 10 0 006.88-2.77V21a1 1 0 002 0v-4.5a1 1 0 00-1-1zm-1.57-8.4l1.43-1.43 2-2a1 1 0 10-1.42-1.42l-2 2A9.89 9.89 0 0012 2a10 10 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4a7.93 7.93 0 0110.67-.81l-11.2 11.2A7.93 7.93 0 014 12a1 1 0 00-2 0 9.89 9.89 0 002.27 6.32l-2 2a1 1 0 000 1.42 1 1 0 001.42 0l2-2 1.43-1.43zm1.06 1.78A8.08 8.08 0 0120 12a1 1 0 002 0 9.83 9.83 0 00-1.14-4.61z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSyncSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;