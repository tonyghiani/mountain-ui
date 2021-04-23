import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFlipVAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.94 12.24a1 1 0 00-1.21.76l-.49 1.94A1 1 0 004 16.12a1 1 0 001.21-.73l.49-1.94a1 1 0 00-.76-1.21zm17 7.52l-4-16A1 1 0 0017 3h-3a1 1 0 00-1 1v16a1 1 0 001 1h7a1 1 0 00.79-.38 1 1 0 00.21-.86zM15 19V5h1.22l3.5 14zM6.4 6.42a1 1 0 00-1.22.73L4.7 9.09a1 1 0 00.73 1.21h.24a1 1 0 001-.76l.48-1.94a1 1 0 00-.75-1.18zM7.51 5h2a1 1 0 000-2h-2a1 1 0 000 2zM4.24 19a1 1 0 00-2-.24l-.24 1a1 1 0 00.18.86A1 1 0 003 21h1a1 1 0 00.24-2zM10 6.51a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm0 6a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm0 6a1 1 0 00-.86.49H8a1 1 0 000 2h2a1 1 0 001-1v-.49a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFlipVAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;