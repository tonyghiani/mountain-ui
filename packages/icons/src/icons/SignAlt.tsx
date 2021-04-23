import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSignAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.78 11.88l-2-2.5A1 1 0 0019 9h-6V3a1 1 0 00-2 0v1H5a1 1 0 00-.78.38l-2 2.5a1 1 0 000 1.24l2 2.5A1 1 0 005 11h6v9H9a1 1 0 000 2h6a1 1 0 000-2h-2v-4h6a1 1 0 00.78-.38l2-2.5a1 1 0 000-1.24zM11 9H5.48l-1.2-1.5L5.48 6H11zm7.52 5H13v-3h5.52l1.2 1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
