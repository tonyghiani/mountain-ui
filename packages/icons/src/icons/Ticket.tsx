import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTicket(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 10a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm12 1a1 1 0 001-1V6a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1 1 1 0 010 2 1 1 0 00-1 1v4a1 1 0 001 1h18a1 1 0 001-1v-4a1 1 0 00-1-1 1 1 0 010-2zm-1-1.82a3 3 0 000 5.64V17H10a1 1 0 00-2 0H4v-2.18a3 3 0 000-5.64V7h4a1 1 0 002 0h10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTicket);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;