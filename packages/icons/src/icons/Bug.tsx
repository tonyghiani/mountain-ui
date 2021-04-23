import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBug(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 14h2a1 1 0 000-2h-2v-1a5.15 5.15 0 00-.21-1.36A5 5 0 0022 5a1 1 0 00-2 0 3 3 0 01-2.14 2.87A5 5 0 0016 6.4a2.58 2.58 0 000-.4 4 4 0 00-8 0 2.58 2.58 0 000 .4 5 5 0 00-1.9 1.47A3 3 0 014 5a1 1 0 00-2 0 5 5 0 003.21 4.64A5.15 5.15 0 005 11v1H3a1 1 0 000 2h2v1a7 7 0 00.14 1.38A5 5 0 002 21a1 1 0 002 0 3 3 0 011.81-2.74 7 7 0 0012.38 0A3 3 0 0120 21a1 1 0 002 0 5 5 0 00-3.14-4.62A7 7 0 0019 15zm-8 5.9A5 5 0 017 15v-4a3 3 0 013-3h1zM10 6a2 2 0 014 0zm7 9a5 5 0 01-4 4.9V8h1a3 3 0 013 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBug);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;