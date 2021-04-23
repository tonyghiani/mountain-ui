import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTruckLoading(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 16h-2.18a3 3 0 00.18-1v-5a3 3 0 00-3-3h-6a3 3 0 00-3 3v5a3 3 0 00.18 1H7a1 1 0 01-1-1V5a3 3 0 00-3-3H2a1 1 0 000 2h1a1 1 0 011 1v10a3 3 0 002.22 2.88 3 3 0 105.6.12h3.36a3 3 0 105.64 0H22a1 1 0 000-2zM9 20a1 1 0 111-1 1 1 0 01-1 1zm2-4a1 1 0 01-1-1v-5a1 1 0 011-1h6a1 1 0 011 1v5a1 1 0 01-1 1zm7 4a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTruckLoading);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;