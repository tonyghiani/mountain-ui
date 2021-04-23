import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFastMailAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.69 9a2.93 2.93 0 00-1-1.71 3 3 0 00-2-.74H4.8a3 3 0 00-2.3 1.02v.06A3 3 0 001.84 10l.88 5a3 3 0 003 2.48h7.94a3 3 0 002.29-1.07 3 3 0 00.62-2.41zm-3.41-.5l-2.34 2.64a1 1 0 01-1.38.11L5.17 8.5zm2.1 6.64a1 1 0 01-.76.36H5.68a1 1 0 01-1-.83L3.87 10l3.43 2.8a3 3 0 004.14-.34L13.8 9.8l.8 4.53a1 1 0 01-.22.81zm6.83-4.64h-2a1 1 0 000 2h2a1 1 0 000-2zm0-2a1 1 0 000-2h-3a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFastMailAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
