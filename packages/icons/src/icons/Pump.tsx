import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgPump(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.54 6.29L19 4.75l-1.41-1.41a1 1 0 00-1.42 1.42l1 1-.83 2.49a3 3 0 00.73 3.07l2.95 3V19a1 1 0 01-2 0v-2a3 3 0 00-3-3H14V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3v-3h1a1 1 0 011 1v2a3 3 0 006 0V9.83a5 5 0 00-1.46-3.54zM12 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h8zm0-9H4V5a1 1 0 011-1h6a1 1 0 011 1zm8 1.42l-1.54-1.54a1 1 0 01-.24-1l.51-1.54.39.4A3 3 0 0120 9.83z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPump);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
