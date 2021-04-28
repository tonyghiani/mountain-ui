import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSortAmountDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.29 14.29l-.29.3V7a1 1 0 00-2 0v7.59l-.29-.3a1 1 0 00-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1 1 0 00-1.42-1.42zM11 8h10a1 1 0 000-2H11a1 1 0 000 2zm10 3H11a1 1 0 000 2h10a1 1 0 000-2zm0 5H11a1 1 0 000 2h10a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSortAmountDown);
export default ForwardRef;
