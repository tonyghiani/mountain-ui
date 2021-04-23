import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExclude(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.54 7.54h-1a1 1 0 00-1 1v1a1 1 0 002 0 1 1 0 100-2zm5.92 5.92a1 1 0 00-1 1 1 1 0 000 2h1a1 1 0 001-1v-1a1 1 0 00-1-1zM21 7.54h-4.54V3a1 1 0 00-1-1H3a1 1 0 00-1 1v12.46a1 1 0 001 1h4.54V21a1 1 0 001 1H21a1 1 0 001-1V8.54a1 1 0 00-1-1zM20 20H9.54v-3.54a1 1 0 000-2 1 1 0 00-2 0H4V4h10.46v3.54a1 1 0 000 2 1 1 0 002 0H20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExclude);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;