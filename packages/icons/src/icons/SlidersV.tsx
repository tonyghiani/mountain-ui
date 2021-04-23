import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSlidersV(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 6H6V3a1 1 0 00-2 0v3H3a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1zm7 8a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm9-8h-1V3a1 1 0 00-2 0v7h-1a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm-5 0h-1V3a1 1 0 00-2 0v11h-1a1 1 0 000 2h4a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSlidersV);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
