import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgAdjust(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 17.93a8 8 0 010-15.86zm2 0V4.07a8 8 0 010 15.86z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdjust);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
