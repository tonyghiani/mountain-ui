import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgStethoscope(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 8a2.993 2.993 0 00-1 5.816V15.5a4.5 4.5 0 01-9 0v-.59A6.004 6.004 0 0014 9V3a1 1 0 00-1-1h-2a1 1 0 000 2h1v5a4 4 0 01-8 0V4h1a1 1 0 000-2H3a1 1 0 00-1 1v6a6.004 6.004 0 005 5.91v.59a6.5 6.5 0 0013 0v-1.684A2.993 2.993 0 0019 8zm0 4a1 1 0 111-1 1.001 1.001 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStethoscope);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
