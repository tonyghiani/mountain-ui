import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLightbulb(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.45 12.46a7 7 0 00-1-9.83 7.09 7.09 0 00-5.92-1.4 7 7 0 00-4 11.15 4.76 4.76 0 011.08 2.86v.29a2 2 0 00-.61 1.4v2a2 2 0 002 2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1a2 2 0 002-2v-2a2 2 0 00-.57-1.4v-.43a4.26 4.26 0 011.02-2.64zM9 18.93v-2h6v2zm6.89-7.72a6.18 6.18 0 00-1.46 3.72H9.56a6.67 6.67 0 00-1.5-3.78 5 5 0 012.84-8A5 5 0 0117 8.07a4.92 4.92 0 01-1.11 3.14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLightbulb);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;