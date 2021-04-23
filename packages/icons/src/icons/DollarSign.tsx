import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgDollarSign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 11h-4a2 2 0 010-4h5a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2V3a1 1 0 00-2 0v2h-1a4 4 0 000 8h4a2 2 0 010 4H9a1 1 0 01-1-1 1 1 0 00-2 0 3 3 0 003 3h2v2a1 1 0 002 0v-2h1a4 4 0 000-8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDollarSign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
