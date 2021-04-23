import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgListUl(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.71 16.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21 1 1 0 00-.21.33 1 1 0 00.21 1.09 1.15 1.15 0 00.33.21.94.94 0 00.76 0 1.15 1.15 0 00.33-.21 1 1 0 00.21-1.09 1 1 0 00-.21-.33zM7 8h14a1 1 0 000-2H7a1 1 0 000 2zm-3.29 3.29a1 1 0 00-1.09-.21 1.15 1.15 0 00-.33.21 1 1 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33 1.15 1.15 0 00.33.21.94.94 0 00.76 0 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1 1 0 00-.21-.33zM21 11H7a1 1 0 000 2h14a1 1 0 000-2zM3.71 6.29a1 1 0 00-.33-.21 1 1 0 00-1.09.21 1.15 1.15 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33 1.15 1.15 0 00.33.21 1 1 0 001.09-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33zM21 16H7a1 1 0 000 2h14a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgListUl);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
