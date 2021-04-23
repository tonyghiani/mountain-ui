import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVerticalDistributionCenter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 15h-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2H3a1 1 0 000 2h1v2a1 1 0 001 1h14a1 1 0 001-1v-2h1a1 1 0 000-2zm-3 3H6v-4h12zM3 8h2v1a1 1 0 001 1h12a1 1 0 001-1V8h2a1 1 0 000-2h-2V5a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 000 2zm4-2h10v2H7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVerticalDistributionCenter);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;