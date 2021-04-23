import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSlack(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2 14.67a2 2 0 104 0v-2H4a2 2 0 00-2 2zm12.64-3.34a2 2 0 002-2V4a2 2 0 10-4 0v5.33a2 2 0 002.02 2zm7.32-2a2 2 0 10-4 0v2h2a2 2 0 002.04-2zM9.34 12.67a2 2 0 00-2 2V20a2 2 0 104 0v-5.33a2 2 0 00-2-2zM14.66 18h-2v2a2 2 0 102-2zM20 12.67h-5.34a2 2 0 000 4H20a2 2 0 000-4zM9.34 7.33H4a2 2 0 100 4h5.34a2 2 0 000-4zm0-5.33a2 2 0 000 4h2V4a2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
