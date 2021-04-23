import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderNetwork(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 18h-6.18A3 3 0 0013 16.18V14h3.67A2.34 2.34 0 0019 11.67V6.33A2.34 2.34 0 0016.67 4h-4l-.13-.41A2.34 2.34 0 0010.37 2h-3A2.34 2.34 0 005 4.33v7.34A2.34 2.34 0 007.33 14H11v2.18A3 3 0 009.18 18H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM7.33 12a.33.33 0 01-.33-.33V4.33A.33.33 0 017.33 4h3a.33.33 0 01.32.23l.36 1.09A1 1 0 0012 6h4.67a.33.33 0 01.33.33v5.34a.33.33 0 01-.33.33zM12 20a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderNetwork);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;