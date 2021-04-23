import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStepBackwardCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.5 7.38a2 2 0 00-2 0l-4 2.31V8a1 1 0 00-2 0v8a1 1 0 002 0v-1.69l4 2.31a2 2 0 002 0 2 2 0 001-1.73V9.11a2 2 0 00-1-1.73zm-1 7.51L9.5 12l5-2.89zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStepBackwardCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;