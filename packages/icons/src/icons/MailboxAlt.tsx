import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMailboxAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 13h2a1 1 0 000-2h-2a1 1 0 000 2zm8 7h-1V9h1a1 1 0 000-2h-1.09A6 6 0 006.09 7H5a1 1 0 000 2h1v11H5a1 1 0 000 2h14a1 1 0 000-2zM12 4a4 4 0 013.86 3H8.14A4 4 0 0112 4zm4 16H8v-2h8zm0-4H8V9h8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMailboxAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;