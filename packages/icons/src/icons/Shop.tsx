import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 5H2a1 1 0 00-1 1v4a3 3 0 002 2.82V22a1 1 0 001 1h16a1 1 0 001-1v-9.18A3 3 0 0023 10V6a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0zm-4 0h2v3a1 1 0 01-2 0zM7 7h2v3a1 1 0 01-2 0zm-3 4a1 1 0 01-1-1V7h2v3a1 1 0 01-1 1zm10 10h-4v-2a2 2 0 014 0zm5 0h-3v-2a4 4 0 00-8 0v2H5v-8.18a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0 3.17 3.17 0 001 .6zm2-11a1 1 0 01-2 0V7h2zM4.3 3H20a1 1 0 000-2H4.3a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShop);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;