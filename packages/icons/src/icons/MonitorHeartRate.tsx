import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMonitorHeartRate(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 19a1 1 0 00.38-.08 1.15 1.15 0 00.33-.21 1 1 0 00.12-.16.56.56 0 00.09-.17.64.64 0 00.08-.18 1.36 1.36 0 000-.2 1 1 0 00-.08-.38.9.9 0 00-.54-.54A1 1 0 008.8 17l-.18.06a.56.56 0 00-.17.09 1 1 0 00-.16.12 1 1 0 00-.21.33A1 1 0 008 18a1 1 0 001 1zm-3.71-.29a1.15 1.15 0 00.33.21A1 1 0 006 19h.19a.6.6 0 00.19-.06.76.76 0 00.18-.09l.15-.12a1.15 1.15 0 00.21-.33A.84.84 0 007 18a1.36 1.36 0 000-.2.64.64 0 00-.06-.18.56.56 0 00-.09-.17 1 1 0 00-.12-.16 1 1 0 00-1.09-.21 1 1 0 00-.33.21 1 1 0 00-.12.16.56.56 0 00-.09.17.64.64 0 00-.1.18 1.36 1.36 0 000 .2 1 1 0 00.08.38 1.15 1.15 0 00.21.33zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-3h16zm0-5H4v-4h4a1 1 0 00.71-.29L10 8.46l2.8 3.2a1 1 0 00.72.34 1 1 0 00.71-.29L15.91 10H20zm0-6h-4.5a1 1 0 00-.71.29l-1.24 1.25-2.8-3.2a1 1 0 00-1.46 0L7.59 8H4V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMonitorHeartRate);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;