import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeSearch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.21 10.29l-1.73-1.72a4.37 4.37 0 00.65-2.26 4.31 4.31 0 10-4.32 4.32 4.37 4.37 0 002.26-.63l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM18.45 8a2.37 2.37 0 01-3.27 0 2.3 2.3 0 01-.68-1.64A2.32 2.32 0 0116.81 4a2.3 2.3 0 011.64.68 2.28 2.28 0 01.68 1.63A2.3 2.3 0 0118.45 8zm2.05 6a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.41l5.88 5.89a3 3 0 004.24 0L15 13.88a1 1 0 00-1.42-1.42l-1.38 1.42a1 1 0 01-1.4 0L4.91 8H9.5a1 1 0 000-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeSearch);
export default ForwardRef;
