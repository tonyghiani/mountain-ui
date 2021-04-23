import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileNetwork(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 19h-6.18A3 3 0 0013 17.18V15h3a3 3 0 003-3V8v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H8a3 3 0 00-3 3v8a3 3 0 003 3h3v2.18A3 3 0 009.18 19H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM13 4.41L15.59 7H14a1 1 0 01-1-1zM8 13a1 1 0 01-1-1V4a1 1 0 011-1h3v3a3 3 0 003 3h3v3a1 1 0 01-1 1zm4 8a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileNetwork);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;