import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPauseCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 7a1 1 0 00-1 1v8a1 1 0 002 0V8a1 1 0 00-1-1zm2-5a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm2-13a1 1 0 00-1 1v8a1 1 0 002 0V8a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPauseCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
