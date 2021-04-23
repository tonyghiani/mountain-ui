import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTopArrowFromTop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 20H5a1 1 0 000 2h14a1 1 0 000-2zM8.71 7.71L11 5.41V17a1 1 0 002 0V5.41l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42l-4-4a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1 1 0 101.42 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTopArrowFromTop);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;