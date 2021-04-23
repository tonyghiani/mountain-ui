import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPathfinder(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4 14.46a1 1 0 00-2 0v1a1 1 0 001 1h1a1 1 0 000-2zM8.18 4h2.1a1 1 0 000-2h-2.1a1 1 0 000 2zm6.28 0a1 1 0 002 0V3a1 1 0 00-1-1h-1a1 1 0 000 2zM4 2H3a1 1 0 00-1 1v1a1 1 0 002 0 1 1 0 000-2zm-1 9.28a1 1 0 001-1v-2.1a1 1 0 00-2 0v2.1a1 1 0 001 1zM15.82 20h-2.1a1 1 0 100 2h2.1a1 1 0 000-2zM21 7.54h-1a1 1 0 000 2 1 1 0 002 0v-1a1 1 0 00-1-1zm0 5.18a1 1 0 00-1 1v2.1a1 1 0 002 0v-2.1a1 1 0 00-1-1zm-4.54-5.18a1 1 0 10-2 0H8.54a1 1 0 00-1 1v5.92a1 1 0 100 2 1 1 0 002 0h5.92a1 1 0 001-1V9.54a1 1 0 100-2zm-2 6.92H9.54V9.54h4.92zM21 19a1 1 0 00-1 1 1 1 0 000 2h1a1 1 0 001-1v-1a1 1 0 00-1-1zM9.54 20a1 1 0 00-2 0v1a1 1 0 001 1h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPathfinder);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;