import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWheelBarrow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2h-2.3l-.16.07-.17.11a.8.8 0 00-.13.13.86.86 0 00-.1.16.71.71 0 00-.08.18v.09L17.38 6h-1.14l-3.12-3.11a3.06 3.06 0 00-4.24 0L5.76 6H3a1 1 0 00-.87.5 1 1 0 000 1l4 7-.77 1.5A2.2 2.2 0 005 16a3 3 0 103 3 3 3 0 00-.85-2.08l1-2 1.38-.14 3.94 5.91A2.93 2.93 0 0016 22a3.18 3.18 0 001.13-.21 3 3 0 001.87-3.3L18 13l1.79-9H21a1 1 0 000-2zM5 20a1 1 0 111-1 1 1 0 01-1 1zm5.3-15.71a1 1 0 011.4 0L13.41 6H8.59zm-2.75 8.65L4.72 8H17l-.82 4.08zm8.81 7a1 1 0 01-1.2-.38l-3.34-5 4.37-.43.81 4.69a1 1 0 01-.64 1.11z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWheelBarrow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;