import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBracketsCurly(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6 6a2 2 0 012-2 1 1 0 000-2 4 4 0 00-4 4v3a2 2 0 01-2 2 1 1 0 000 2 2 2 0 012 2v3a4 4 0 004 4 1 1 0 000-2 2 2 0 01-2-2v-3a4 4 0 00-1.38-3A4 4 0 006 9zm16 5a2 2 0 01-2-2V6a4 4 0 00-4-4 1 1 0 000 2 2 2 0 012 2v3a4 4 0 001.38 3A4 4 0 0018 15v3a2 2 0 01-2 2 1 1 0 000 2 4 4 0 004-4v-3a2 2 0 012-2 1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBracketsCurly);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
