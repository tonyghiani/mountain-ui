import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPrescriptionBottle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a2 2 0 00-2 2v2a2 2 0 002 2v11a3 3 0 003 3h8a3 3 0 003-3V8a2 2 0 002-2V4a2 2 0 00-2-2zm-2 14h-6v-4h6zm0-6h-7a1 1 0 00-1 1v6a1 1 0 001 1h7v1a1 1 0 01-1 1H8a1 1 0 01-1-1V8h10zM5 6V4h14v2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPrescriptionBottle);
export default ForwardRef;
