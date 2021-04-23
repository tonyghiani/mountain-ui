import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFocus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 2H3a1 1 0 00-1 1v5a1 1 0 002 0V4h4a1 1 0 000-2zm0 18H4v-4a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2zM21 2h-5a1 1 0 000 2h4v4a1 1 0 002 0V3a1 1 0 00-1-1zm0 13a1 1 0 00-1 1v4h-4a1 1 0 000 2h5a1 1 0 001-1v-5a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFocus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
