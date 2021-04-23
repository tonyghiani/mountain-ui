import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgVerticalDistributeBottom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 18h-1v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v5H3a1 1 0 000 2h18a1 1 0 000-2zm-3 0H6v-4h12zM3 10h18a1 1 0 000-2h-2V5a1 1 0 00-1-1H6a1 1 0 00-1 1v3H3a1 1 0 000 2zm4-4h10v2H7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVerticalDistributeBottom);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
