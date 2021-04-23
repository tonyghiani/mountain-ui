import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBill(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.5 10.5H12a1 1 0 000-2h-1V8a1 1 0 00-2 0v.55a2.5 2.5 0 00.5 4.95h1a.5.5 0 010 1H8a1 1 0 000 2h1v.5a1 1 0 002 0v-.55a2.5 2.5 0 00-.5-4.95h-1a.5.5 0 010-1zM21 12h-3V3a1 1 0 00-.5-.87 1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1zm15-1a1 1 0 01-2 0v-5h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBill);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;