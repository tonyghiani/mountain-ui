import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBatteryBolt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.69 15H4V9h2.31a1 1 0 000-2H4a2 2 0 00-2 2v6a2 2 0 002 2h2.69a1 1 0 100-2zm7.2-2.56a1.27 1.27 0 00.06-.18 1.42 1.42 0 000-.2V12v-.12a.65.65 0 00-.05-.2.89.89 0 00-.08-.17.86.86 0 00-.1-.16l-.16-.13-.09-.09h-.06l-.18-.06h-3.5l1.45-2.5a1 1 0 10-1.74-1l-2.31 4v.06a1.27 1.27 0 00-.06.18 1.42 1.42 0 000 .2L7 12v.12a.65.65 0 00.05.2.89.89 0 00.08.17.86.86 0 00.1.16l.16.13a.76.76 0 00.09.09h.16A1 1 0 008 13h3.27l-1.45 2.5a1 1 0 001.74 1l2.31-4s.01-.04.02-.06zM21 10a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm-4-3h-2.69a1 1 0 000 2H17v6h-2.31a1 1 0 100 2H17a2 2 0 002-2V9a2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBatteryBolt);
export default ForwardRef;
