import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMinusPath(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.18 4h2.1a1 1 0 000-2h-2.1a1 1 0 000 2zM3 11.28a1 1 0 001-1v-2.1a1 1 0 00-2 0v2.1a1 1 0 001 1zM14.46 4a1 1 0 002 0V3a1 1 0 00-1-1h-1a1 1 0 000 2zM21 7.54h-4.54a1 1 0 10-2 0H8.54a1 1 0 00-1 1v5.92a1 1 0 100 2V21a1 1 0 001 1H21a1 1 0 001-1V8.54a1 1 0 00-1-1zM20 20H9.54V9.54H20zM4 2H3a1 1 0 00-1 1v1a1 1 0 002 0 1 1 0 000-2zm0 12.46a1 1 0 00-2 0v1a1 1 0 001 1h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMinusPath);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
