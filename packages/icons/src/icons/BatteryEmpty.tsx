import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBatteryEmpty(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 7H4a2 2 0 00-2 2v6a2 2 0 002 2h13a2 2 0 002-2V9a2 2 0 00-2-2zm0 8H4V9h13zm4-5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBatteryEmpty);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
