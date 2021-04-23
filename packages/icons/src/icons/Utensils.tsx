import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgUtensils(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2a1 1 0 00-1 1v5.46l-1 .67V3a1 1 0 00-2 0v6.13l-1-.67V3a1 1 0 00-2 0v6a1 1 0 00.45.83L15 11.54V21a1 1 0 002 0v-9.46l2.55-1.71A1 1 0 0020 9V3a1 1 0 00-1-1zM9 2a5 5 0 00-5 5v6a1 1 0 001 1h3v7a1 1 0 002 0V3a1 1 0 00-1-1zM8 12H6V7a3 3 0 012-2.83z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUtensils);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
