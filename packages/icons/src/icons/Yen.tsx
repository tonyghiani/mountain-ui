import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgYen(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.55 2.17a1 1 0 00-1.38.28L12 10.2 6.83 2.45a1 1 0 00-1.66 1.1l5 7.45H7a1 1 0 000 2h4v2H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2h-4v-2h4a1 1 0 000-2h-3.13l5-7.45a1 1 0 00-.32-1.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgYen);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
