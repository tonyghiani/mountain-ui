import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMedicalDrip(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 6h-2V4h2a1 1 0 000-2H9a5 5 0 00-5 5v14a1 1 0 002 0V7a3 3 0 013-3h4v2h-2a3 3 0 00-3 3v4.93a3 3 0 001.34 2.5L11 17.54V18a2 2 0 002 2v1a1 1 0 002 0v-1a2 2 0 002-2v-.46l1.66-1.11a3 3 0 001.34-2.5V9a3 3 0 00-3-3zm-1 5h2v1h-1a1 1 0 000 2h1a1 1 0 01-.44.76l-2.1 1.41A1 1 0 0015 17v1h-2v-1a1 1 0 00-.45-.83l-2.1-1.41a1 1 0 01-.45-.83V9a1 1 0 011-1h6a1 1 0 011 1h-2a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMedicalDrip);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;