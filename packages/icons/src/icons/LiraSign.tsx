import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgLiraSign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 12a1 1 0 00-1 1 7.008 7.008 0 01-7 7v-8.865l5.217-1.159a1 1 0 00-.434-1.952L10 9.087V7.135l5.217-1.159a1 1 0 10-.434-1.952L10 5.087V3a1 1 0 00-2 0v2.531l-2.217.493a1 1 0 10.434 1.952L8 7.58V9.53l-2.217.493a1 1 0 10.434 1.952L8 11.58V21a1 1 0 001 1h1a9.01 9.01 0 009-9 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLiraSign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
